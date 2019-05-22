/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '../../../components/Header';
import '../../../assets/css/publiccss.css';
import { toastInfo, toastWarn, toastError, toastDefault, toastSuccess } from '../../../utils/toastUtils';

class ToastPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('ToastPage--constructor', props);
  }

  componentDidMount() {
    // console.log('ToastPage--componentDidMount')
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleText="Toast Page" />
          <h4>Show Toast Component</h4>
          <span style={{ fontStyle: 'italic', color: '#9A9A9A', paddingBottom: '1rem' }}>支持手动拖拽删除message</span>
          <div className="jp-content">
            <Button
              onClick={() => {
                toastSuccess('成功Button');
              }}
            >成功Button
            </Button>
            <WhiteSpace />
            <Button
              onClick={() => {
                toastInfo('通用Button');
              }}
            >通用Button
            </Button>
            <WhiteSpace />
            <Button
              onClick={() => {
                toastError('错误Button');
              }}
            >错误Button
            </Button>
            <WhiteSpace />
            <Button
              onClick={() => {
                toastWarn('警告Button');
              }}
            >警告Button
            </Button>
            <WhiteSpace />
            <Button onClick={() => {
              toastDefault('默认Button');
            }}
            >默认Button
            </Button>
            <WhiteSpace />

          </div>

          {/* <div className="jp-footer" /> */}
        </div>
      </Fragment>
    );
  }
}


ToastPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastPage);
