/**
 * iconfont 阿里巴巴字库调用
 * 动画参数 SPIN，SPIN2,ALTERNATE,
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Styled from './IconFont.module.less';
// iconfont的css样式,必须导入
import '@assets/css/iconfont.css';
// 用户自定义的样式 通过classname属性设置，暂时没有用到，可以自行扩展
import '@assets/css/iconfont.custom.css';

const IconFontJ = (props) => {
  const { type, play, style, classname = '', ...others } = props;
  const cls = classNames({
    iconfont: true,
    [`${type}`]: true,
    [Styled['iconfont-spin']]: play === IconFontJ.SPIN,
    [Styled['iconfont-spin-1']]: play === IconFontJ.SPIN1,
    [Styled['iconfont-spin-2']]: play === IconFontJ.SPIN2,
    [Styled['iconfont-spin-alternate']]: play === IconFontJ.ALTERNATE,
  }, classname);

  return (
    <i className={cls} {...others} style={style} />
  );
};

IconFontJ.propTypes = {
  type: PropTypes.string.isRequired,
};

IconFontJ.SPIN = 'SPIN';
IconFontJ.SPIN1 = 'SPIN1';
IconFontJ.SPIN2 = 'SPIN2';
IconFontJ.ALTERNATE = 'ALTERNATE';

export default IconFontJ;
