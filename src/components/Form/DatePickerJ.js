/**
 * @description: DatePicker components
 * @author jack
 * @date 2019/4/11
*/

import React, { PureComponent } from 'react';
import { List, DatePicker } from 'antd-mobile';
import { format } from 'date-fns/esm';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import PropTypes from 'prop-types';
import { minDate, maxDate } from './formConstantJ';
import './FormGlobal.less';
import Styled from './DatePickerJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';
import { LANG_STORAGE_DEFAULT } from '../../constants/constants';
import storageUtils from '../../utils/storageUtils';


class DatePickerJ extends PureComponent {
  constructor(props) {
    super(props);
    const { input } = props;
    const localeTmp = storageUtils.getItem(LANG_STORAGE_DEFAULT.lang_type) === 'zh_CN' ? zhCN : enUS;
    const dateTimeTmp = input.value;
    this.state = {
      datePickLocale: localeTmp,
      dateTime: dateTimeTmp || null,
    };
  }

  dateFormat = (dateTime) => {
    const { columnData } = this.props;
    const { dateMode } = columnData;
    let formatStr = 'yyyy/MM/dd';
    if (dateMode === 'datetime') {
      formatStr = 'yyyy/MM/dd HH:mm';
    }
    if (dateTime) {
      return format(dateTime, formatStr);
    }
    return null;
  }

  render() {
    const { input, columnData, meta: { touched, error, warning } } = this.props;
    const { dateTime, datePickLocale } = this.state;
    // console.log('DatePickerJ', this.props, touched, this.state);
    const { disabled, end_user_column_name, required_flag, dateMode } = columnData;
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
      <div className={`form-root-div-j ${Styled['datePicker-Css']} ${disabledDivClass} ${formTipClass}`}>
        <DatePicker
          value={dateTime ? new Date(dateTime) : null}
          mode={dateMode || 'date'}
          locale={datePickLocale}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          extra={disabled && ' '}
          format={this.dateFormat}
          onChange={(date) => {
            if (date) {
              input.onChange(date.getTime());
              this.setState({ dateTime: date });
            }
          }}
        >
          <List.Item
            arrow={disabled ? '' : 'horizontal'}
          >
            <span className={`form-label-j ${disabledClass}`}>{end_user_column_name || ''}</span>
            {
              required_flag && (<span className="form-require-j">*</span>)
            }
          </List.Item>
        </DatePicker>
        <FormWarnOrErrorJ props={this.props} />
      </div>
    );
  }
}

DatePickerJ.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  columnData: PropTypes.object.isRequired, // eslint-disable-line
  meta: PropTypes.object, // eslint-disable-line
};

export default DatePickerJ;
