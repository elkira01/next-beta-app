import { LoginDataType, RegisterDataType } from '../model';
import { loginAction, registerAction } from '@/features/auth/api';

export const useAuth = () => {
    const login = async (data: LoginDataType) => {
        const res = await loginAction(data);

        if (res?.id) {
            return { success: true };
        }

        return null;
    };

    const register = async (data: RegisterDataType) => {
        const res = await registerAction(data);

        if (res?.id) {
            return { success: true };
        }

        return null;
    };

    return {
        login,
        register,
    };
};
