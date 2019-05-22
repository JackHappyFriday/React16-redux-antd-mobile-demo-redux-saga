/**
 * @description: Calendar components 目前该组件不支持选择时间，只支持选择月份
 * @author jack
 * @date 2019/4/11
*/

import React, { PureComponent } from 'react';
import { List, Calendar } from 'antd-mobile';
import { format } from 'date-fns/esm';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import './FormGlobal.less';
import PropTypes from 'prop-types';
import Styled from './CalendarJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';
import storageUtils from '../../utils/storageUtils';
import { LANG_STORAGE_DEFAULT } from '../../constants/constants';
import { maxDate, minDate } from './formConstantJ';

const now = new Date();

class CalendarJ extends PureComponent {
  // originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

  constructor(props) {
    super(props);
    const { input } = props;
    const localeTmp = storageUtils.getItem(LANG_STORAGE_DEFAULT.lang_type) === 'zh_CN' ? zhCN : enUS;
    const dateTimeTmp = input.value && new Date(input.value);
    console.log('CalendarJ--constructor', props, dateTimeTmp);
    this.state = {
      show: false,
      config: { type: 'one', locale: localeTmp },
      dateTime: dateTimeTmp || null,
    };
  }

  componentWillUnmount() {
    this.setState({
      show: false,
    });
  }

  onCancel = async () => {
    // console.log('onCancel')
    // document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      dateTime: undefined,
    });
  }

  onSelect = (date) => {
    const { input } = this.props;
    input.onChange(date.getTime());
    this.setState({
      show: false,
      dateTime: date,
    });
  }

  render() {
    const { columnData, meta: { touched, error, warning } } = this.props;
    const { dateTime, config, show } = this.state;
    // console.log('CalendarJ', this.props, touched, this.state);
    const { disabled, end_user_column_name, required_flag } = columnData;
    let formTipClass = '';
    if (touched) {
      if (error || warning) {
        formTipClass = ' form-red-border-j';
      }
    }
    let disabledClass = '';
    if (disabled) {
      disabledClass = ' form-label-disabled-j';
    }
    return (
      <div className={`form-root-div-j ${Styled['calendar-Css']} ${formTipClass}`}>
        <List.Item
          arrow={disabled ? '' : 'horizontal'}
          extra={<span className={disabled ? 'form-label-disabled-j' : 'form-label-normal-j'}>{(dateTime && format(dateTime, 'yyyy/MM/dd')) || ''}</span>}
          onClick={() => {
            if (!disabled) {
              this.setState({
                show: true,
              });
            }
          }}
        >
          <span className={`form-label-j ${disabledClass}`}>{end_user_column_name || ''}</span>
          {
            required_flag && (<span className="form-require-j">*</span>)
          }
        </List.Item>
        <FormWarnOrErrorJ props={this.props} />
        <Calendar
          {...config}
          visible={show}
          onCancel={this.onCancel}
          onSelect={this.onSelect}
          defaultDate={now}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    );
  }
}

CalendarJ.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  columnData: PropTypes.object.isRequired, // eslint-disable-line
  meta: PropTypes.object, // eslint-disable-line
};

export default CalendarJ;
