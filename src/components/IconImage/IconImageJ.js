/**
 * @author jack
 * @date 2019-05-14
 * @description 图片显示组件，支持自动处理异常的图片，src是必传参数
 * 是否需要做懒加载，可以在此基础上修改
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styled from './IconImageJ.module.less';

/**
 * 自动处理加载失败的图片，显示占位图
 * @param event
 * @constructor
 */
const IconImageError = (event) => {
  // eslint-disable-next-line
  const srcPath = require('@assets/icons/image-error.png');
  const img = event.target;
  img.src = srcPath;
  img.onError = null;
};

const IconImageJ = (props) => {
  const { src, border, style, classname, ...others } = props;
  const cls = classNames({
    [Styled['image-j-main']]: !!border,
  }, classname);

  return (
    <img
      src={src}
      className={cls}
      {...others}
      style={style}
      alt=""
      onError={IconImageError}
    />
  );
};

IconImageJ.propTypes = {
  src: PropTypes.string.isRequired,
};

export default IconImageJ;
