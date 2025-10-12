import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export function useAuthStore() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
