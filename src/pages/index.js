import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import Cookies from 'js-cookie';
import {Route, Switch, withRouter} from 'react-router-dom';

import {PageIndexRoute} from '../config/route';

import stores from '../stores';

@withRouter
export default class Pages extends Component {

    pathname = this.props.location.pathname;

    _checkSessionID = () => {
        if (this.pathname !== '/login') {
            if (!Cookies.get('JSESSIONID')) {
                this.props.history.replace('/login');
            }
        } else {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home');
            }
        }
    };

    componentWillMount() {
        if (this.pathname === '/') {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home');
            } else {
                this.props.history.replace('/login');
            }
        } else {
            this._checkSessionID();
        }
    }

    componentDidCatch() {
        this.props.history.replace('/error');
    }

    render() {
        return (
            <Provider {...stores}>
                <Switch>
                    {PageIndexRoute.map((item, index) => <Route key={index} {...item}/>)}
                </Switch>
            </Provider>
        )
    }
}