/**
 * @description: InputItemTextJ components 支持文本类型的输入，默认文字方向在右边
 * @author jack
 * @date 2019/4/11
 */

import React, { PureComponent } from 'react';
import { InputItem } from 'antd-mobile';
import './FormGlobal.less';
import PropTypes from 'prop-types';
import Styled from './InputItemTextJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';


/**
 * 特殊参数说明
 * type input的类型
 * 目前支持 bankCard/phone/password/number/digit 和其他标准的type
 * number只支持数字输入
 * digit只支持小数点和数字输入
 * 注：就是不支持money类型
 */

class InputItemTextJ extends PureComponent {
  render() {
    const { input, columnData, meta: { touched, error, warning } } = this.props;
    // console.log('InputItemTextJ', this.props, touched, Styled);
    const { placeholder, disabled, required_flag, end_user_column_name,
      application_column_name, type } = columnData;
    let formTipClass = '';
    if (touched) {
      if (error || warning) {
        formTipClass = ' form-red-border-j';
      }
    }
    return (
      <div className={`form-root-div-j ${Styled['inputItem-text-Css']} ${formTipClass}`}>
        <InputItem
          {...input}
          name={application_column_name}
          type={type || 'text'}
          clear
          placeholder={placeholder}
          disabled={disabled}
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

InputItemTextJ.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  columnData: PropTypes.object.isRequired, // eslint-disable-line
  meta: PropTypes.object, // eslint-disable-line
};

export default InputItemTextJ;
