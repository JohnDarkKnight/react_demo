import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';
import logo from './logo.svg';

export default class Home extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts/2">Posts</Link>
                    </li>
                    <li>
                        <Link to="/author">Author</Link>
                    </li>
                </ul>
            </div>
        )
    }
}