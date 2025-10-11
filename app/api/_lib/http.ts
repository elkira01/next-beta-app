const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',');

export function getCorsHeaders(origin: string | null) {
    const isAllowed = allowedOrigins.includes(origin || '');

    return {
        'Access-Control-Allow-Origin': isAllowed ? (origin as any) : '',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
    };
}
