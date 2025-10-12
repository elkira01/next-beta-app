import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const protectedRoutes = ['/users', '/tasks'];

export async function verifyToken(token: string) {
    try {
        const verified = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_SECRET || '')
        );
        return verified.payload;
    } catch (error) {
        return null;
    }
}

export async function prox(req: NextRequest) {
    const token = req.cookies.get('auth-token')?.value;
    const path = req.nextUrl.pathname;

    const isProtected = protectedRoutes.some((route) => path.startsWith(route));

    console.log(isProtected, token);
    if (isProtected && !token) {
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    if (token) {
        const payload = await verifyToken(token);
        if (!payload) {
            return NextResponse.redirect(new URL('/sign-in', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|static|favicon.ico).*)'],
};
