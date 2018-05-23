import React, {Component} from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import {Tooltip} from 'antd';
import Cookies from 'js-cookie';
import Loading from '../../../components/Loading';
import {RightRoute} from '../../../config/route';

@withRouter
@inject('UserStore')
@observer
class Right extends Component {

    state = {
        isLoading: false,
    };

    componentWillMount() {
        let {userInfo, updateName} = this.props.UserStore;
        if (userInfo.name === null) {
            updateName(Cookies.get('userName'));
        }
    }

    logout = () => {
        this.props.logout();
    };

    render() {
        const {name} = this.props.UserStore.userInfo;
        const {isLoading} = this.state;
        return (
            <div className='right'>
                <div className='header clear clearFix'>
                    <div className='user'>
                        <span className='font icon-touxiang'/>
                        <Tooltip
                            title={<span style={{fontSize: '14px', cursor: 'pointer'}} onClick={this.logout}>退出</span>}>
                            <span className='name'>{name}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    <Loading loading={isLoading}>
                        <Switch>
                            {RightRoute.map((item, i) => <Route key={i} {...item}/>)}
                        </Switch>
                    </Loading>
                </div>
            </div>
        )
    }
}

export default Right