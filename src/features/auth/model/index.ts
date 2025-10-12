export type AuthContextType = {
    profile: UserSessionType | undefined;
};

export type LoginDataType = {
    email: string;
    password: string;
};

export type RegisterDataType = {
    name: string;
    email: string;
    password: string;
};

export type UserSessionType = {
    userId: string;
    userName: string;
    userEmail: string;
};
