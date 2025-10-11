import bcrypt from 'bcrypt';

export const hashPassword = async (password: any) => {
    return await bcrypt.hash(password, 10);
};

export const verifyPassword = async (password: any, hashedPassword: any) =>
    await bcrypt.compare(password, hashedPassword);
