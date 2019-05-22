/**
 * @description: 加载svg图片使用
 * @author jack
 * @date 2019/4/16
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './IconSvgJ.module.css';

const propTypes = {
  svgId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const IconSvgJ = ({ svgId, className }) => {
  const classes = classNames(Styled.icon, className);

  return (
    <svg className={classes}>
      <use xlinkHref={`#${svgId}`} />
    </svg>
  );
};

IconSvgJ.propTypes = propTypes;
IconSvgJ.defaultProps = defaultProps;

export default IconSvgJ;
