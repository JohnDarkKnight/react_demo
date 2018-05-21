import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import Pages from './pages';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Pages/>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
