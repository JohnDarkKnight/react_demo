import Loadable from 'react-loadable';
import DelayLoading from '../components/DelayLoading';

const AsyncHome = Loadable({loader: () => import('../pages/Home'), loading: DelayLoading, delay: 3000});
const AsyncPost = Loadable({loader: () => import('../pages/Posts'), loading: DelayLoading, delay: 3000});

const AsyncLogin = Loadable({loader: () => import('../pages/Login'), loading: DelayLoading, delay: 3000});
const AsyncLayouts = Loadable({loader: () => import('../pages/Layouts'), loading: DelayLoading, delay: 3000});
const AsyncError = Loadable({loader: () => import('../pages/Error'), loading: DelayLoading, delay: 3000});
const AsyncNotFound = Loadable({loader: () => import('../pages/NotFound'), loading: DelayLoading, delay: 3000});

const RightRoute = [
    {
        exact: true,
        path: '/home',
        component: AsyncHome,
    },
    {
        exact: true,
        path: '/post',
        component: AsyncPost,
    },
    {
        component: AsyncNotFound,
    },
];

const PageIndexRoute = [
    {
        exact: true,
        path: '/login',
        component: AsyncLogin,
    },
    {
        exact: true,
        path: '/error',
        component: AsyncError,
    },
    {
        exact: false,
        path: '/',
        component: AsyncLayouts,
    },
];

export {
    RightRoute,
    PageIndexRoute,
};
