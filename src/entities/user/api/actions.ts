import { GET, POST, PUT } from '@/shared/api/fetch';

export const fetchUserById = async (id: any) =>
    await GET('/users/{id}', { id });

export const createdUser = async (payload: any) =>
    await POST('/users', payload);

export const updateUser = async (id: string, payload: any) =>
    await PUT('/users/{id}', payload, { id });
