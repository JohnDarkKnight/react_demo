import React from 'react'
import ErrorPage from '../Error';

const DelayLoading = ({pastDelay, error}) => {
    if (pastDelay) {
        return <div>Loading...</div>
    } else if (error) {
        return <ErrorPage/>
    } else {
        return null;
    }
};
export default DelayLoading