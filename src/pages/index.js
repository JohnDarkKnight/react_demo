import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import routes from '../config/routes';

export default class Pages extends React.Component {

    componentDidCatch() {
        this.props.history.replace('/error');
    }

    render() {
        return (
            <Router>
                <Switch>
                    {
                        routes.map((item, index) => <Route key={`routes_key_${index}`} {...item}/>)
                    }
                </Switch>
            </Router>
        )
    }
}
