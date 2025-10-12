import { prisma } from '../../_lib/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { getCorsHeaders } from '../../_lib/http';
import { verifyPassword } from '../../_lib/security';
import { createToken } from '@/features/auth/lib/token';
import { COOKIE_MAX_AGE, COOKIE_NAME } from '@/features/auth/config';

export async function POST(request: NextRequest) {
    const origin = request.headers.get('origin');
    const headers = getCorsHeaders(origin);

    const payload = await request.json();

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: payload.email,
            },
        });

        if (!user?.id) {
            return NextResponse.json(
                { error: 'User not found' },
                { headers, status: 401 }
            );
        }

        const isVerifiedPassword = await verifyPassword(
            payload.password,
            user.password
        );

        if (!isVerifiedPassword) {
            return NextResponse.json(
                {
                    error: "Email or password doesn't correspond",
                },
                { headers, status: 401 }
            );
        }

        const authToken = await createToken({
            id: user.id,
            email: user.email,
        });

        const response = NextResponse.json(
            { id: user.id, email: user.email, name: user.name },
            { headers, status: 200 }
        );

        response.cookies.set(COOKIE_NAME, authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: COOKIE_MAX_AGE,
            path: '/',
        });

        return response;
    } catch (error: any) {
        return NextResponse.json(error);
    }
}

export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get('origin');
    const headers = getCorsHeaders(origin);

    return new NextResponse(null, {
        status: 200,
        headers,
    });
}
