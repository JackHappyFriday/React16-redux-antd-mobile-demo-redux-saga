/**
 * @description: ArrowFormItemJ components 支持选择类型
 * @author jack
 * @date 2019/4/11
 */

import React, { PureComponent } from 'react';
import { List } from 'antd-mobile';
import './FormGlobal.less';
import PropTypes from 'prop-types';
import Styled from './ArrowFormItemJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';


/**
 * 特殊参数说明
 * value 如果有值需要传递过来显示当前选中的值
 */

class ArrowFormItemJ extends PureComponent {
  render() {
    const { input, columnData, meta: { touched, error, warning } } = this.props;
    console.log('ArrowFormItemJ', this.props, touched, Styled);
    const { placeholder, disabled, required_flag, end_user_column_name, value } = columnData;
    let formTipClass = '';
    if (touched) {
      if (error || warning) {
        formTipClass = ' form-red-border-j';
      }
    }
    let disabledClass = '';
    let disabledDivClass = '';
    if (disabled) {
      disabledClass = ' form-label-disabled-j';
      disabledDivClass = ' form-datepicker-disabled-j';
    }
    return (
      <div className={`form-root-div-j ${Styled['arrowItem-text-Css']} ${disabledDivClass} ${formTipClass}`}>
        <List.Item
          arrow={disabled ? '' : 'horizontal'}
          multipleLine
          extra={value || placeholder}
          onClick={() => {
            if (!disabled) {
              console.log('ArrowFormItemJ---onClick');
              input.onChange('arrowitem');
            }
          }}
        >
          <span className={`form-label-j ${disabledClass}`}>{end_user_column_name || ''}</span>
          {
            required_flag && (<span className="form-require-j">*</span>)
          }
        </List.Item>
        <FormWarnOrErrorJ props={this.props} />
      </div>
    );
  }
}

ArrowFormItemJ.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  columnData: PropTypes.object.isRequired, // eslint-disable-line
  meta: PropTypes.object, // eslint-disable-line
};

export default ArrowFormItemJ;
