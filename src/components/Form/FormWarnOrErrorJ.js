/**
 * @author jack
 * @date 2019-05-13
 * @description form页面显示错误信息页面
 */
import React from 'react';
import PropTypes from 'prop-types';
import Style from './FormWarnOrErrorJ.module.less';
import { COLUMN_SHOW_WARN_OR_ERROR } from './formConstantJ';

const FormWarnOrErrorJ = (props) => {
  const { props: { meta: { touched, error, warning } } } = props;
  return (
    <div className={Style['FormWarnOrErrorJ-main']}>
      {
        touched && COLUMN_SHOW_WARN_OR_ERROR && (
          (error && (
            <span className={Style['text-danger-error']}>
                {error}
            </span>
          ))
          || (warning && (
            <span className={Style['text-danger-warn']}>
                {warning}
            </span>
          )))
      }
    </div>
  );
};

FormWarnOrErrorJ.propTypes = {
  // props: PropTypes.objectOf(PropTypes.object).isRequired,
  meta: PropTypes.objectOf(PropTypes.object), // eslint-disable-line
};
export default FormWarnOrErrorJ;
