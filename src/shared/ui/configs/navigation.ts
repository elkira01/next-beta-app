import { RoutePaths } from '@/shared/configs/routes';

export type AppMenuType = {
    label: string;
    path: string;
};
export const appNavbarMenu: Array<AppMenuType> = [
    {
        label: 'Dashboard',
        path: RoutePaths.DASHBOARD,
    },
    {
        label: 'Users',
        path: RoutePaths.USERS,
    },
    {
        label: 'Task',
        path: RoutePaths.TASKS,
    },
];
