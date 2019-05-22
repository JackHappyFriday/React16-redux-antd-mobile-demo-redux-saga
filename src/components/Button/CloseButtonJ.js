/**
 * @author jack
 * @since 20190511
 * @description 关闭按钮，没有业务逻辑，只是显示，如果需要有操作，需要扩展
 */
import React from 'react';
import PropTypes from 'prop-types';
import Style from './Button.module.less';
import IconFontJ from '../IconFont';

const CloseButtonJ = (props) => {
  const { color, iconColor } = props;
  return (
    <div className={Style['close-button-main']} style={{ background: color }}>
      <span className={Style['close-button-span']}>
        {
          iconColor ? (
            <span style={{ color: iconColor }}>
              <IconFontJ type="icon-chahao" />
            </span>
          ) : <IconFontJ type="icon-chahao" />
        }
      </span>
    </div>
  );
};

CloseButtonJ.propTypes = {
  color: PropTypes.string,
  iconColor: PropTypes.string,
};
CloseButtonJ.defaultProps = {
  color: '#FFF',
  iconColor: '',
};

export default CloseButtonJ;
