export const registerAction = async (payload: any) => {
    try {
        const resp = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/register`,
            {
                method: 'POST',
                body: JSON.stringify(payload ?? {}),
                // headers: {
                //     'Access-Control-Allow-Origin': '*',
                // },
            }
        );

        return await resp.json();
    } catch (err) {
        console.error(err);
    }
};
