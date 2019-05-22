/**
 * @author jack
 * @date 2019-05-15
 * @description Button 组件，需要自行传入 width和max-width，
 *              增加max-width的作用是如果button的文字很长可以使用这个属性让其变成...,
 *              一排最多放4个按钮，太多了很难看，宽度40，40，20共三个按钮比较合理（自行参考，该组件支持没有限制）
 *              注意：clickFun 参数必传，而且只能是函数，如果不传入会提示错误，既然是按钮，理应有点击事件
 */
import React from 'react';
import intl from 'react-intl-universal';
import classNames from 'classnames';
import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import Styled from './LineButtonJ.module.less';

const LineButtonJ = (props) => {
  const { clickFun, itemData: { buttonText, buttonId, classname, type, style } } = props;
  const newType = type || LineButtonJ.INFO;
  const cls = classNames({
    [Styled['button-j-info']]: newType === LineButtonJ.INFO,
    [Styled['button-j-warn']]: newType === LineButtonJ.WARN,
    [Styled['button-j-cancel']]: newType === LineButtonJ.CANCEL,
    [Styled['button-j-delete']]: newType === LineButtonJ.DELETE,
  }, classname);
  return (
    <Button
      className={cls}
      style={style}
      onClick={() => {
        if (clickFun) {
          clickFun();
        }
      }}
    >
      { buttonText || intl.get(buttonId).d('Button')}
    </Button>
  );
};

LineButtonJ.propTypes = {
  itemData: PropTypes.objectOf(PropTypes.any).isRequired,
  clickFun: PropTypes.func.isRequired,
};

LineButtonJ.defaultProps = {
};

LineButtonJ.INFO = 'INFO';
LineButtonJ.WARN = 'WARN';
LineButtonJ.CANCEL = 'CANCEL';
LineButtonJ.DELETE = 'DELETE';

export default LineButtonJ;
