import UserManagementPage from '@/views/users/ui/UserManagementPage';
import { ProtectedRoute } from '@/shared/ui/ProtectedRoute';

export default async function Page() {
    return (
        <ProtectedRoute>
            <UserManagementPage />
        </ProtectedRoute>
    );
}
