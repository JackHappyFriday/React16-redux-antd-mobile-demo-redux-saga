
import React from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import { Field, reduxForm } from 'redux-form';
import intl from 'react-intl-universal';
import { connect } from 'react-redux';
import { InputItemTextJ } from '@components/Form';
import { requiredForm, formatForm, normalizeForm } from '@components/Form/validateUtils';
import Styled from './LoginPage.module.less';

// eslint-disable-next-line
let LoginForm = (props) => {
  // eslint-disable-next-line
  const { handleSubmit, submitting } = props;
  // console.log('LoginForm', props);
  // 票据类型参数
  const columnData = {
    placeholder: '',
    column_type: 'text',
    locale: 'zh',
    disabled: false,
  };

  return (
    <form>
      <div
        role="button"
        tabIndex="0"
        className={Styled['login-form-main']}
        onKeyDown={(event) => {
          // console.log('onKeyDown', event);
          if (event.keyCode === 13) {
            // 回车执行查询
            handleSubmit();
          }
        }}
      >
        <Field
          name="username"
          component={InputItemTextJ}
          validate={[requiredForm]}
          normalize={normalizeForm}
          format={formatForm}
          columnData={Object.assign({}, columnData,
            { application_column_name: 'username',
              end_user_column_name: '',
              placeholder: intl.get('placeholder.username') })}
        />
        <Field
          name="password"
          component={InputItemTextJ}
          validate={[requiredForm]}
          columnData={Object.assign({}, columnData,
            { application_column_name: 'password',
              end_user_column_name: '',
              type: 'password',
              placeholder: intl.get('placeholder.password') })}
        />
      </div>
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <Button
        className={Styled['login-form-button']}
        type="primary"
        disabled={submitting}
        onClick={() => {
          handleSubmit();
        }}
      >
        {intl.get('button.login')}
      </Button>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'loginForm',
})(LoginForm);

LoginForm = connect(() => {
  return ({});
})(LoginForm);

export default LoginForm;
