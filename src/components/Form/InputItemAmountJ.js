/**
 * @description: InputItemAmountJ components 支持金额（带小数）类型的输入
 * @author jack
 * @date 2019/4/11
 */

import React, { PureComponent } from 'react';
import { InputItem } from 'antd-mobile';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils/numberFormatUtils';
import './FormGlobal.less';
import Styled from './InputItemTextJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';



/**
 * 特殊参数说明
 * precision 精度设置，默认为2位
 * 该组件type就是money，不支持其他type
 */

class InputItemAmountJ extends PureComponent {
  render() {
    const { input, columnData, meta: { touched, error, warning } } = this.props;
    console.log('InputItemAmountJ', this.props, touched, Styled);
    const { placeholder, disabled, required_flag, end_user_column_name, application_column_name, precision } = columnData;
    let formTipClass = '';
    if (touched) {
      if (error || warning) {
        formTipClass = ' form-red-border-j';
      }
    }
    return (
      <div className={`form-root-div-j ${Styled['inputItem-amount-Css']} ${formTipClass}`}>
        <InputItem
          {...input}
          name={application_column_name}
          type="money"
          clear
          placeholder={placeholder}
          disabled={disabled}
          onBlur={(value) => {
            // 当焦点消失时format输入值
            if (value) {
              input.onChange(formatNumber(value, precision));
            }
          }}
          labelNumber="7"
        >
          <span className="form-label-j">{end_user_column_name || ''}</span>
          {
            required_flag && (<span className="form-require-j">*</span>)
          }
        </InputItem>
        <FormWarnOrErrorJ props={this.props} />
      </div>
    );
  }
}

InputItemAmountJ.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  columnData: PropTypes.object.isRequired, // eslint-disable-line
  meta: PropTypes.object, // eslint-disable-line
};


export default InputItemAmountJ;
