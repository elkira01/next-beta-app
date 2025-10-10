import { AppLayout } from '@/shared/ui/layouts/AppLayout';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return <AppLayout>{children}</AppLayout>;
}
