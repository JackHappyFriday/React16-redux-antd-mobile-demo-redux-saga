/**
 * @description: Checkbox components
 * @author jack
 * @date 2019/4/11
*/

import React, { PureComponent } from 'react';
import { Checkbox } from 'antd-mobile';
import './FormGlobal.less';
import PropTypes from 'prop-types';
import Styled from './CheckboxJ.less';
import FormWarnOrErrorJ from './FormWarnOrErrorJ';

const { CheckboxItem } = Checkbox;

class CheckboxJ extends PureComponent {
  render() {
    const { input, columnData, meta: { touched, error, warning } } = this.props;
    // console.log('CheckboxJ', this.props, touched);
    const { disabled, application_column_name } = columnData;
    let formTipClass = '';
    if (touched) {
      if (error || warning) {
        formTipClass = ' form-red-border-j';
      }
    }
    return (
      <div className={`form-root-div-j ${Styled['checkBox-Css']} ${formTipClass}`}>
        <CheckboxItem
          {...input}
          name={application_column_name}
          disabled={disabled}
        />
        <FormWarnOrErrorJ props={this.props} />
      </div>
    );
  }
}


CheckboxJ.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  columnData: PropTypes.object.isRequired, // eslint-disable-line
  meta: PropTypes.object, // eslint-disable-line
};

export default CheckboxJ;
