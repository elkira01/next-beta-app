import { COOKIE_MAX_AGE, COOKIE_NAME } from '../config';
import { verifyToken } from './token';
import { cookies } from 'next/headers';

export async function getSession() {
    const token = await getAuthCookie();

    if (!token) return null;

    return await verifyToken(token);
}

export async function setAuthCookie(token: string) {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: COOKIE_MAX_AGE,
        path: '/',
    });
}

export async function getAuthCookie() {
    const cookieStore = await cookies();
    return cookieStore.get(COOKIE_NAME)?.value;
}

export async function clearAuthCookie() {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}
