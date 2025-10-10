import { AppMenuType } from '@/shared/ui/configs/navigation';
import Link from 'next/link';

export const SidebarNavigation = ({ menu }: { menu: AppMenuType[] }) => {
    return (
        <div className='w-full flex flex-col gap-y-3 p-5'>
            {menu.map((item) => (
                <li key={item.label} className='list-none'>
                    <Link href={item.path} prefetch={true}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </div>
    );
};
