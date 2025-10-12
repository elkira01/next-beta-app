import { prisma } from '../../_lib/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { getCorsHeaders } from '../../_lib/http';
import { hashPassword } from '../../_lib/security';

export async function POST(request: NextRequest) {
    const origin = request.headers.get('origin');
    const headers = getCorsHeaders(origin);

    const payload = await request.json();
    const hashedPassword = await hashPassword(payload.password);

    try {
        const user = await prisma.user.create({
            data: { ...payload, password: hashedPassword },
        });

        return NextResponse.json({ id: user?.id }, { headers, status: 201 });
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
