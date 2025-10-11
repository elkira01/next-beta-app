import { Plus } from 'lucide-react';
import Link from 'next/link';
import { RoutePaths } from '@/shared/configs/routes';

function UserManagementPage() {
    return (
        <div className='w-full h-full '>
            <header className='h-8'>Manage users</header>
            <main className='h-[calc(100%-32px)] w-full content-center'>
                <Link href={RoutePaths.REGISTER_ACCOUNT}>
                    <button className='p-5 border rounded-sm cursor-pointer mx-auto block'>
                        <div className='mx-auto flex'>
                            <Plus />
                            <span>New user</span>
                        </div>
                    </button>
                </Link>
            </main>
        </div>
    );
}

export default UserManagementPage;
