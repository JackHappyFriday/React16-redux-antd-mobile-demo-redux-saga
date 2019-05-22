/**
 * 当前组件不可用，
 * 需要根据下面的URL重新做一个漂亮的calendar
 * jack
 * https://github.com/clauderic/react-infinite-calendar
 */
import React from 'react';
import { List } from 'antd-mobile';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import Styled from './DatePickerJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';


class DatePickerNewJ extends React.Component {
  constructor(props) {
    super(props);
    const { columnData, input } = props; // eslint-disable-line
    const localeTmp = columnData && columnData.locale === 'zh' ? zhCN : enUS;
    const dateTimeTmp = input.value;
    this.state = {
      show: false,
      datePickLocale: localeTmp,
      dateTime: dateTimeTmp || null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    // eslint-disable-next-line
    const { columnData, meta: { touched, error, warning } } = this.props;
    // eslint-disable-next-line
    console.log('DatePickerJ', this.props, touched, this.state);
    const { disabled, end_user_column_name, required_flag } = columnData;
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
        <List.Item
          arrow={disabled ? '' : 'horizontal'}
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

export default DatePickerNewJ;
