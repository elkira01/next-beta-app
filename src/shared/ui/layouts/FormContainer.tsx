'use client';

import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export const FormContainer = ({
    title,
    hideGoBack,
    children,
}: {
    title: string;
    hideGoBack?: boolean;
    children: ReactNode;
}) => {
    const router = useRouter();

    return (
        <div className='w-full h-full border border-gray-300 rounded-md'>
            <header className='h-16 p-5 border-b border-b-gray-300 flex items-center gap-x-3'>
                {!hideGoBack && (
                    <ArrowLeft onClick={() => router.back()} size={20} />
                )}
                <h3 className='uppercase'>{title}</h3>
            </header>
            <section className='h-[calc(100%-32px)] p-5'>{children}</section>
        </div>
    );
};
