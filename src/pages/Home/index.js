import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../components/Axios';

import {Button, WhiteSpace} from 'antd-mobile';

import './index.css';
import logo from './logo.svg';

export default class Home extends React.Component {

    _onClick = async () => {
        try {
            const params = {
                username: 'admin',
                password: '123456',
                mobileLogin: true,
            };
            const result = await login(params);

        } catch (error) {
        }
    };

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
                    <Button type="ghost" size="small" inline>small</Button>
                    <Button
                        icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg"
                                   alt="哈喽"/>}>
                        with custom icon
                    </Button>
                    <WhiteSpace/>
                    <Button
                        type="ghost"
                        inline
                        onClick={this._onClick}
                        style={{marginRight: '4px'}}
                        className="am-button-borderfix">
                        inline ghost
                    </Button>

                </ul>

            </div>
        )
    }
}