export type AuthContextType = {
    profile: UserSessionType | undefined;
};

export type LoginDataType = {
    username: string;
    password: string;
};

export type RegisterDataType = {
    username: string;
    email: string;
    password: string;
    avatar?: string;
};

export type UserSessionType = {
    userId: string;
    userName: string;
    userEmail: string;
};
