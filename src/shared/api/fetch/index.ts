import { buildFetchAdapter } from '@/shared/api/fetch/adapter';

export const GET = buildFetchAdapter('GET');

export const POST = buildFetchAdapter('POST');
export const PATCH = buildFetchAdapter('PATCH');
export const DELETE = buildFetchAdapter('DELETE');
export const PUT = buildFetchAdapter('PUT');
