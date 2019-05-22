/**
 * 登录页面
 * Created by jack on 2019/5/5
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { WhiteSpace } from 'antd-mobile';
import intl from 'react-intl-universal';
import { loginAction } from '@action/login';
import { suspendAction } from '@action/suspend';
import Version from '@components/Version';
import { toastInfo, toastWarn } from '@utils/toastUtils';
import Styled from './LoginPage.module.less';
import LoginForm from './LoginForm';


class LoginPage extends PureComponent {
  constructor(props) {
    super(props);
    // console.log('LoginPage--constructor', props);
    this.state = {
      // 图片需要更换合理大小的图片
      loginLogo: require('@assets/images/logo.jpeg'), // eslint-disable-line
    };
  }

  componentDidMount() {
    const { action } = this.props;
    action.suspendAction({ showSuspend: false });
  }

  componentWillUnmount() {
    const { action } = this.props;
    action.suspendAction({ showSuspend: true });
  }

  notify = () => toastInfo('success');

  loginClick = (data) => {
    const { action } = this.props;
    const param = {
      username: data.username,
      password: data.password,
    };
    action.loginAction(param);
  }

  render() {
    const { loginLogo } = this.state;
    return (
      <Fragment>
        <div className={Styled['login-main']}>
          <div className={Styled['login-content']}>
            <img className={Styled['login-content-img']} src={loginLogo} alt="" />
            <WhiteSpace size="lg" />
            <LoginForm onSubmit={(values) => {
              // console.log('LoginPage--LoginForm--onSubmit', values);
              const usernameValue = values.username;
              const passwordValue = values.password;
              if (!usernameValue || !passwordValue) {
                toastWarn(intl.get('message.login_params_is_null'));
                return;
              }
              this.loginClick(values);
            }}
            />
          </div>
          <div
            className={Styled['login-footer']}
            role="button"
            tabIndex="0"
            onKeyPress={() => {}}
            onClick={() => {
              console.log('click');
              this.notify();
            }}
          >
            <Version />
          </div>
        </div>
      </Fragment>
    );
  }
}


LoginPage.propTypes = {
  action: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps(state) {
  // console.log('login--', state);
  return {
    loginData: state.loginReducer.userDataObj,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    loginAction,
    suspendAction,
  };
  return {
    action: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
