import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import Cookies from 'js-cookie';
import {Route, Switch, withRouter} from 'react-router-dom';

import Login from './Login';
import Layouts from './Layouts';

import stores from '../stores';

@withRouter
export default class Pages extends Component {

    _checkSessionID = () => {
        if (this.props.location.pathname !== '/login') {
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

    componentWillReceiveProps() {
        this._checkSessionID();
    }

    render() {
        return (
            <Provider {...stores}>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path='/' component={Layouts}/>
                </Switch>
            </Provider>
        )
    }
}