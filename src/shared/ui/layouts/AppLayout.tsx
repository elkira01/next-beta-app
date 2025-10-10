import { SidebarNavigation } from '@/shared/ui/layouts/SidebarNavigation';
import { appNavbarMenu } from '@/shared/ui/configs/navigation';
import { AppHeader } from '@/shared/ui/layouts/AppHeader';
import { ReactNode } from 'react';
import Image from 'next/image';
import { Rss } from 'lucide-react';

export function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className='w-screen min-h-screen h-full grid grid-cols-6'>
            <aside className='h-full col-span-1 border-r border-gray-100'>
                <div className='h-16 content-center '>
                    <figure className='px-5'>
                        <Image
                            src='/next.svg'
                            alt='app-logoo'
                            width={128}
                            height={64}
                        />
                    </figure>
                </div>
                <div className='h-[calc(100%-128px)]'>
                    <SidebarNavigation menu={appNavbarMenu} />
                </div>
                <div className='h-16 bg-gray-300'></div>
            </aside>
            <aside className='col-span-5 h-full'>
                <header className='h-16 w-full border-b border-gray-100'>
                    <AppHeader />
                </header>
                <main className='p-5 relative h-[calc(100%-64px)]'>
                    {children}
                    <div className='absolute bottom-5 right-5 w-16 h-16'>
                        <div className='w-full h-full border content-center rounded-full'>
                            <Rss size={32} className='mx-auto' />
                        </div>
                    </div>
                </main>
            </aside>
        </div>
    );
}
