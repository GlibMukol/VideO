import { Dashboard } from "../Dashboard";

export type TRouterPath = {
    path: string;
    component: React.ReactNode;
    id: string;
    name: string;
}

const RouterPaths:TRouterPath[] = [
    {
        name: 'main',
        path: '/a',
        component: <Dashboard />,
        id: `main_/`,
    }
]

export {
    RouterPaths
}