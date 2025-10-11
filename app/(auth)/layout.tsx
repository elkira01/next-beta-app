import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className='min-h-screen w-screen content-center'>
            <div className='mx-auto w-1/3'>{children}</div>
        </div>
    );
}
