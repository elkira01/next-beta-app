import { createContext, useEffect, useState } from 'react';
import { AuthContextType, UserSessionType } from '../model';
import { getProfileAction } from '../api';

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider() {
    const [profile, setProfile] = useState<UserSessionType>();

    // Check session on mount
    useEffect(() => {
        (async () => {
            let session = await getProfileAction();

            session.userId && setProfile(session);
        })();
    }, []);

    return <AuthContext.Provider value={{ profile }}></AuthContext.Provider>;
}
