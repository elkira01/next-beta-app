import { API_ENDPOINT } from '@/shared/configs/env';
import {
    buildRouteParams,
    buildSearchParams,
} from '@/shared/lib/routing-helpers';

export const buildFetchAdapter = (method: string) => {
    if (method == 'POST' || method == 'PATCH' || method == 'PUT') {
        return async (routePath: string, payload: any, params?: any) => {
            try {
                const response = await fetch(
                    `${API_ENDPOINT}${buildRouteParams(routePath, params)}`,
                    {
                        method: method,
                        body: JSON.stringify(payload),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    return Promise.reject(response);
                }

                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                return Promise.reject(error);
            }
        };
    } else {
        return async (routePath: string, params?: any, query?: any) => {
            try {
                const response = await fetch(
                    query
                        ? `${API_ENDPOINT}${buildRouteParams(routePath, params)}?${buildSearchParams(query)}`
                        : `${API_ENDPOINT}${buildRouteParams(routePath, params)}`,
                    {
                        method: method,
                    }
                );

                if (!response.ok) {
                    return Promise.reject(response);
                }

                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                return Promise.reject(error);
            }
        };
    }
};
