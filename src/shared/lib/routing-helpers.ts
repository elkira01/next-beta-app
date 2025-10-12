export const buildSearchParams = (params: { [x: string]: string }) => {
    const searchParams = new URLSearchParams();

    Object.entries(params).map((value) => {
        searchParams.append(value.at(0) as any, value.at(1) as any);
    });

    return searchParams.toString();
};
