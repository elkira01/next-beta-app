import { Bell, CircleUserRound } from 'lucide-react';

export const AppHeader = () => {
    return (
        <div className='w-full h-full flex justify-between p-5 items-center'>
            <aside></aside>
            <aside className='flex'>
                <div>
                    <CircleUserRound />
                </div>
                <div>
                    <Bell />
                </div>
            </aside>
        </div>
    );
};
