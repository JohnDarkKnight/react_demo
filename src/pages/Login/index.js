import React, {Component} from 'react'
import {Provider, inject, observer} from 'mobx-react'
import {message} from 'antd';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

import LoginForm from './form';
import './index.less';

@inject('LoginStore')
@inject('UserStore')
@observer
export default class Login extends Component {

    store = new this.props.LoginStore(); // 在这里实例化，保证每次加载组件数据的初始化。

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    _onSubmit = (form, updateLoading) => {
        form.validateFields((err, values) => {
            if (!err) {
                updateLoading(true);
                this.timer = setTimeout(() => {
                    updateLoading(false);
                    let {userName, password} = values;
                    if (userName === 'admin' && password === '123456') {
                        let message = `M&${userName}&${password}`;
                        let key = 'react_starter';
                        let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key))
                        Cookies.set('JSESSIONID', session, {expires: 1, path: '/'});
                        Cookies.set('userName', userName, {expires: 1, path: '/'});
                        this.props.UserStore.updateName(userName);
                        this.props.history.push('/home');
                    } else {
                        message.error('账号：admin ； 密码：123456')
                    }
                }, 1500)
            }
        });
    };


    render() {
        console.log('this.props', this.props);
        return (
            <Provider store={this.store}>
                <div className='Login_wrap clear clearFix'>
                    <div className='form P_auto'>
                        <span className='font icon-react'/>
                        <LoginForm submit={this._onSubmit}/>
                    </div>
                </div>
            </Provider>
        )
    }
}

