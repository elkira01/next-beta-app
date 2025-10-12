export const PRIVATE_KEY = new TextEncoder().encode(
    process.env.JWT_SECRET || ''
);

export const COOKIE_NAME = 'auth-token';
export const COOKIE_MAX_AGE = 7 * 24 * 60 * 60; // 7 days
