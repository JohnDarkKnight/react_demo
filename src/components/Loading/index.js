import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {observer} from 'mobx-react'
import {Spin} from 'antd';
import PropTypes from 'prop-types';
import './index.less'

@withRouter
@observer
class Loading extends Component {

    static propTypes = {
        loading: PropTypes.bool,
    };

    static  defaultProps = {
        loading: false,
    };

    render() {
        const {loading} = this.props;
        return (
            <Spin tip='LOADING' wrapperClassName='Loading_wrap' spinning={loading}>
                {this.props.children}
            </Spin>
        )
    }
}

export default Loading;