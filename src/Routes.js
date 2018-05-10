import React from 'react';
import Loadable from 'react-loadable';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Loading from './pages/Loading';

const AsyncHome = Loadable({loader: () => import('./pages/Home'), loading: Loading});
const AsyncPosts = Loadable({loader: () => import('./pages/Posts'), loading: Loading});
const AsyncNotFound = Loadable({loader: () => import('./pages/NotFound'), loading: Loading});

export default () =>
    <Router>
        <Switch>
            <Route path="/" exact component={AsyncHome}/>
            <Route path="/posts/:id" exact component={AsyncPosts}/>
            <Route component={AsyncNotFound}/>
        </Switch>
    </Router>