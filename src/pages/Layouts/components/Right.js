import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'
import {Tooltip} from 'antd'
import routerConfig from '../../../config/routes'
import Cookies from 'js-cookie'
import Loading from '../../../components/Loading'

@withRouter
@inject('UserStore')
@observer
class Right extends Component {
    componentWillMount() {
        console.log('this.props', this.props);
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
                    <Loading>
                        {routerConfig.map((item, i) =>
                            <Route key={i} path={item.path} component={item.component} exact/>
                        )}
                    </Loading>
                </div>
            </div>
        )
    }
}

export default Right