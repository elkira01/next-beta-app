import { NextRequest, NextResponse } from 'next/server';
import { getCorsHeaders } from '../_lib/http';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    const origin = request.headers.get('origin');
    const headers = getCorsHeaders(origin);

    try {
        const cookieStore = await cookies();

        cookieStore.set('TEST_COOKIE', 'Value for test');
        return NextResponse.json('No content', { headers, status: 200 });
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
