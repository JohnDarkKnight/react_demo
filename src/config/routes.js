import Loadable from 'react-loadable';
import DelayLoading from '../components/DelayLoading';

function getAsyncComponent(componentPath) {
    return Loadable({loader: () => import(componentPath), loading: DelayLoading, delay: 3000});
}

const AsyncHome = getAsyncComponent('../pages/Home');
const AsyncPost = getAsyncComponent('../pages/Post');

export default [{
    'path': '/home',
    'component': AsyncHome,
}, {
    'path': '/post',
    'component': AsyncPost
}];

