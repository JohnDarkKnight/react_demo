import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
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

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});
