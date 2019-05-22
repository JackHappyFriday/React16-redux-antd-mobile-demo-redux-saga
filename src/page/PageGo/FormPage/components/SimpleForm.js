import React from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { InputItemTextJ, CheckboxJ, CalendarJ, DatePickerJ, InputItemAmountJ,
  TextareaItemJ, ArrowFormItemJ } from '../../../../components/Form';
import { requiredForm } from '../../../../components/Form/validateUtils';

// eslint-disable-next-line
let SimpleForm = (props) => {
  // eslint-disable-next-line
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log('SimpleForm', props);
  // 票据类型参数
  const columnData = {
    value: 'antdvalue',
    application_column_name: 'invoice_type',
    end_user_column_name: 'invoice_type',
    required_flag: true,
    placeholder: 'placholder',
    column_type: 'text',
    type: 'digit',
    disabled: false,
    checked: false,
    dateMode: 'date',
    precision: 3,
  };

  const inputArray = [];
  for (let i = 0; i < 2; i += 1) {
    inputArray.push({
      name: `testName${i}`,
      label: `labelName${i}`,
    });
  }


  return (
    <form onSubmit={handleSubmit}>
      {
        inputArray && inputArray.map((item) => {
          return (
            <Field
              key={item.name}
              name={item.name}
              validate={[requiredForm]}
              component={InputItemTextJ}
              columnData={Object.assign({}, columnData, { end_user_column_name: item.label })}
            />
          );
        })
      }

      <Field
        name="InputItemTextNumber"
        validate={[requiredForm]}
        component={InputItemTextJ}
        columnData={Object.assign({}, columnData, { end_user_column_name: 'InputItemTextNumber', type: 'number' })}
      />

      <Field
        name="InputItemTextbankCard"
        validate={[requiredForm]}
        component={InputItemTextJ}
        columnData={Object.assign({}, columnData, { end_user_column_name: 'InputItemTextbankCard', type: 'bankCard' })}
      />

      <Field
        name="InputItemTextphone"
        validate={[requiredForm]}
        component={InputItemTextJ}
        columnData={Object.assign({}, columnData, { end_user_column_name: 'InputItemTextphone', type: 'phone' })}
      />

      <Field
        name="InputItemTextdigit"
        validate={[requiredForm]}
        component={InputItemTextJ}
        columnData={Object.assign({}, columnData, { end_user_column_name: 'InputItemTextdigit', type: 'digit' })}
      />

      <Field
        name="checkboxName"
        component={CheckboxJ}
        validate={[requiredForm]}
        onChange={(e) => {
          console.log('CheckboxJ---e', e, e.target.checked);
        }}
        columnData={columnData}
      />

      <Field
        name="calendarName"
        component={CalendarJ}
        validate={[requiredForm]}
        columnData={Object.assign({}, columnData, { disabled: false })}
      />

      <Field
        name="datePickerName"
        component={DatePickerJ}
        validate={[requiredForm]}
        columnData={columnData}
      />

      <Field
        name="inputAmountName"
        component={InputItemAmountJ}
        validate={[requiredForm]}
        columnData={columnData}
      />

      <Field
        name="textareaItemName"
        component={TextareaItemJ}
        validate={[requiredForm]}
        columnData={Object.assign({}, columnData, { disabled: false })}
      />

      <Field
        name="arrowItemName"
        component={ArrowFormItemJ}
        // validate={[requiredForm]}
        columnData={Object.assign({}, columnData, { disabled: false })}
      />


      <Field
        name="InputItemTextNumber"
        validate={[requiredForm]}
        component={InputItemTextJ}
        columnData={Object.assign({}, columnData, { end_user_column_name: 'InputItemTextNumber', type: 'number' })}
      />

      <div>
        <button type="submit" disabled={submitting}>Submit pristine || submitting</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        <button
          type="button"
          onClick={() => {
            // eslint-disable-next-line
          props.change('lastName', '123456776534321');
          }}
        > set employed
        </button>
      </div>
    </form>
  );
};

SimpleForm = reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

// eslint-disable-next-line
const selector = formValueSelector('simple');
console.log('formValueSelector--selector', selector);

SimpleForm = connect(state => ({
  // console.log('connect', state, selector(state, 'antdinput'));
  // can select values individually
  // const hasEmailValue = selector(state, 'hasEmail')
  // const favoriteColorValue = selector(state, 'favoriteColor')
  // or together as a group
  // const { firstName, lastName } = selector(state, 'firstName', 'lastName')

  initialValues: {
    testName0: '111111',
    testName1: 'zhngong',
    testName2: 'aaaa',
    testName3: 'zb1',
    calendarName: new Date().getTime(),
    datePickerName: new Date().getTime(),
    state,
  }, // pull initial values from account reducer
}))(SimpleForm);

export default SimpleForm;
