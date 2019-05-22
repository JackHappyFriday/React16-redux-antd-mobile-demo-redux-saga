/**
 * 配置Toast参考下面网站
 * https://github.com/fkhadra/react-toastify#demo
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Styled from './ToastJ.module.less';
import IconFontJ from '../IconFont';

class ToastJ extends PureComponent {
  componentDidMount() {}

  render() {
    const { message } = this.props;
    return (
      <div className={Styled['toast-j-main']} style={{ background: message.color }}>
        {message.classname && (
          <div className={Styled['toast-j-icon']}>
            <IconFontJ type={message.classname} />
          </div>
        )}
        {
          message.fontColor ? (
            <div style={{ color: message.fontColor }}>{message.text}</div>
          ) : <div>{message.text}</div>
        }
      </div>
    );
  }
}

ToastJ.propTypes = {
  message: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ToastJ;
