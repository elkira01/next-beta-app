import { LoginDataType, RegisterDataType } from '@/features/auth/model';
import { GET, POST } from '@/shared/api/fetch-adapters';

export const registerAction = async (payload: RegisterDataType) =>
    POST('/api/register', payload);

export const loginAction = async (payload: LoginDataType) =>
    POST('/api/login', payload);

export const getProfileAction = async () => GET('/api/profile');
