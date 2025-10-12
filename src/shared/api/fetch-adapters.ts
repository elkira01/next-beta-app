import { API_ENDPOINT } from '@/shared/configs/env';
import { buildSearchParams } from '@/shared/lib/routing-helpers';

export async function GET(route: string, query?: any, payload?: any) {
    try {
        console.log(
            `${API_ENDPOINT}${route}?${buildSearchParams(query)}`,
            payload
        );

        const response = await fetch(
            `${API_ENDPOINT}${route}?${buildSearchParams(query)}`,
            {
                method: 'get',
            }
        );

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        return Promise.resolve(error);
    }
}

export async function POST(route: string, payload?: any) {
    try {
        const response = await fetch(`${API_ENDPOINT}${route}`, {
            method: 'post',
            body: JSON.stringify(payload ?? {}),
        });

        console.log(response);

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        return Promise.resolve(error);
    }
}
