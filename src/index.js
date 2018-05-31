import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import './index.css';
import Pages from './pages';
import registerServiceWorker from './registerServiceWorker';

import stores from './stores';

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Pages/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
