import { Plus } from 'lucide-react';
import Link from 'next/link';
import { RoutePaths } from '@/shared/configs/routes';

function DashboardPage() {
    return (
        <div className='w-full h-full '>
            <header className='h-8 uppercase'>Dashboard</header>
            <main className='h-[calc(100%-32px)] w-full content-center'>
                <Link href={RoutePaths.SIGN_UP}>
                    <button className='p-5 border rounded-sm cursor-pointer mx-auto block'>
                        <div className='mx-auto flex'>
                            <Plus />
                            <span>Create account</span>
                        </div>
                    </button>
                </Link>
            </main>
        </div>
    );
}

export default DashboardPage;
