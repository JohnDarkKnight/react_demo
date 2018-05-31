import React from 'react';
import Loadable from 'react-loadable';
import PageError from '../components/Error';
import Loading from '../components/Loading';

const DelayLoading = ({isLoading, error}) => {
    if (isLoading) {
        return (
            <Loading/>
        )
    } else if (error) {
        return (
            <PageError/>
        )
    } else {
        return null;
    }
};


const AsyncUserInfo = Loadable({loader: () => import('../pages/UserInfo'), loading: DelayLoading});
const AsyncPageError = Loadable({loader: () => import('../components/Error'), loading: DelayLoading});
const AsyncNotFound = Loadable({loader: () => import('../pages/NotFound'), loading: DelayLoading});
const AsyncLoading = Loadable({loader: () => import('../components/Loading'), loading: DelayLoading});


export default [
    {
        path: '/',
        component: AsyncUserInfo,
        exact: true,
    },
    {
        path: '/error',
        component: AsyncPageError,
        exact: true,
    },
    {
        path: '/loading',
        component: AsyncLoading,
        exact: true,
    },
    {
        component: AsyncNotFound,
    },
];