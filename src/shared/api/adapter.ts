import {
    buildRouteParams,
    buildSearchParams,
} from '@/shared/lib/routing-helpers';

export const buildFetchAdapter = (apiEndpoint: any) => {
    return (method: string) => {
        if (method == 'POST' || method == 'PATCH' || method == 'PUT') {
            return async (routePath: string, payload: any, params?: any) => {
                try {
                    const response = await fetch(
                        `${apiEndpoint}${buildRouteParams(routePath, params)}`,
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
                            ? `${apiEndpoint}${buildRouteParams(routePath, params)}?${buildSearchParams(query)}`
                            : `${apiEndpoint}${buildRouteParams(routePath, params)}`,
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
};
