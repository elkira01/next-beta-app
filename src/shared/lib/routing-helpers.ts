export const buildSearchParams = (params: { [x: string]: string }) => {
    const searchParams = new URLSearchParams();

    params &&
        Object.entries(params).map((value) => {
            searchParams.append(value.at(0) as any, value.at(1) as any);
        });

    return searchParams.toString();
};

export const buildRouteParams = (routePath: string, params?: any) => {
    const routeChunks = routePath.split('/');

    return params
        ? routeChunks
              .reduce((res: any[], chunk: string) => {
                  if (!chunk.startsWith('{')) {
                      res.push(chunk);
                  } else {
                      const param = chunk.slice(1, chunk.length - 1);
                      res.push(params[param]);
                  }
                  return res;
              }, [])
              .join('/')
        : routePath;
};
