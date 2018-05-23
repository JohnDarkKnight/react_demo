import React from 'react';
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
            </div>
        )
    }
}