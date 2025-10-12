import { UserRole } from '@/entities/user/model/user-role';

export interface User {
    id: any;
    name: string;
    role: UserRole;
    email: string;
    password: string;
    avatar: string;
}
