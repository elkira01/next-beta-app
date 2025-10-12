import { getSession } from '@/features/auth/lib/session';
import { redirect } from 'next/navigation';
import { RoutePaths } from '@/shared/configs/routes';
import { Fragment, ReactNode } from 'react';

export async function ProtectedRoute({ children }: { children: ReactNode }) {
    const session = await getSession();

    if (!session) {
        redirect(RoutePaths.SIGN_IN);
    }
    return <Fragment>{children}</Fragment>;
}
