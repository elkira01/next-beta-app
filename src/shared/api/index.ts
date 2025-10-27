import { buildFetchAdapter } from '@/shared/api/adapter';

export class FetchApiService {
    constructor(public endPoint: any) {}

    GET = buildFetchAdapter(this.endPoint)('GET');

    POST = buildFetchAdapter(this.endPoint)('POST');

    PATCH = buildFetchAdapter(this.endPoint)('PATCH');

    DELETE = buildFetchAdapter(this.endPoint)('DELETE');

    PUT = buildFetchAdapter(this.endPoint)('PUT');
}
