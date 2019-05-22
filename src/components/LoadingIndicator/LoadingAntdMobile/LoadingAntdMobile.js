/**
 * @author jack
 * @date 2019-05-14
 * antd-mobile 自带的加载控件，个人感觉比较丑，
 */
import React from 'react';
import { ActivityIndicator } from 'antd-mobile';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';

const LoadingAntdMobile = (props) => {
  const { loadData } = props;
  return (
    <ActivityIndicator animating size="large" text={loadData.text} className={loadData.classname} />
  );
};

LoadingAntdMobile.propTypes = {
  loadData: PropTypes.objectOf(PropTypes.object),
};

LoadingAntdMobile.defaultProps = {
  loadData: {
    text: intl.get('loading').d('Loading...'),
    classname: 'loading-antd-j',
  },
};

export default LoadingAntdMobile;
