import { jwtVerify, SignJWT } from 'jose';
import { PRIVATE_KEY } from '../config';

export async function createToken(payload: { userId: string; email: string }) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(PRIVATE_KEY);
}

export async function verifyToken(token: string) {
    try {
        const verified = await jwtVerify(token, PRIVATE_KEY);
        return verified.payload;
    } catch (error) {
        return null;
    }
}
