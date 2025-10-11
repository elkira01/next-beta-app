export const parseZodError = (errors: any[], filedName: string) => {
    const errObj = errors.find((err) => err.path == filedName);

    return errObj?.message;
};
