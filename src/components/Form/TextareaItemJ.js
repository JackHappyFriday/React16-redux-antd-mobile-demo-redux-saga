/**
 * @description: TextareaItemJ components 文本域类型的输入
 * @author jack
 * @date 2019/4/11
 */

import React, { PureComponent } from 'react';
import { List, TextareaItem } from 'antd-mobile';
import './FormGlobal.less';
import PropTypes from 'prop-types';
import Styled from './TextareaItemJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';

/**
 * 特殊参数说明
 */

class TextareaItemJ extends PureComponent {
  render() {
    const { input, columnData, meta: { touched, error, warning } } = this.props;
    console.log('TextareaItemJ', this.props, touched, Styled);
    const { placeholder, disabled, required_flag, end_user_column_name, application_column_name } = columnData;
    let formTipClass = '';
    if (touched) {
      if (error || warning) {
        formTipClass = ' form-red-border-j';
      }
    }
    let disabledClass = '';
    let disabledDivClass = '';
    let amListHeaderCssClass = '';
    if (disabled) {
      disabledClass = ' form-label-disabled-j';
      disabledDivClass = ' form-datepicker-disabled-j';
      amListHeaderCssClass = 'am-list-header-css-disabled-j';
    } else {
      amListHeaderCssClass = 'am-list-header-css-j';
    }
    return (
      <div className={`form-root-div-j ${Styled['textareaItem-Css']} ${disabledDivClass} ${formTipClass}`}>
        <List
          renderHeader={() => {
            return (
              <div>
                <span className={`form-label-j ${disabledClass} ${amListHeaderCssClass}`}>{end_user_column_name || ''}</span>
                { required_flag && (<span className="form-require-j">*</span>) }
              </div>
            );
          }}
          className={`${Styled['textareaItem-list-Css']}`}
        >
          <TextareaItem
            {...input}
            name={application_column_name}
            clear
            placeholder={placeholder}
            disabled={disabled}
            rows={8}
            count={200}
            labelNumber="7"
          />
          <FormWarnOrErrorJ props={this.props} />
        </List>
      </div>
    );
  }
}

TextareaItemJ.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  columnData: PropTypes.object.isRequired, // eslint-disable-line
  meta: PropTypes.object, // eslint-disable-line
};

export default TextareaItemJ;
