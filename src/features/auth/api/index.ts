import { LoginDataType, RegisterDataType } from '@/features/auth/model';
import { GET, POST } from '@/shared/api/fetch';

export const registerAction = async (payload: RegisterDataType) =>
    POST('/users', payload);

export const loginAction = async (payload: LoginDataType) =>
    POST('/auth/login', payload);

export const getProfileAction = async () => GET('/api/profile');
