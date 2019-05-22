/**
 * @author jack
 * @since 2019-04-10
 * form页面的校验方法
 * requiredForm, formatForm, normalizeForm, onBlurForm, onChangeForm
 */
const requiredForm = (value, allValues, props, name) => {
  // console.log('required', value, allValues, props, name);
  return (value || (typeof value === 'number' && value > 0) ? '' : `[${name}] Required`);
};

// eslint-disable-next-line
const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : '');

// eslint-disable-next-line
const minLength = min => value =>
  (value && value.length < min ? `Must be ${min} characters or more` : '');

// eslint-disable-next-line
const number = value =>
  // eslint-disable-next-line
  (value && isNaN(Number(value)) ? 'Must be a number' : '');

// eslint-disable-next-line
const minValue = min => value =>
  (value && value < min ? `Must be at least ${min}` : '');

// eslint-disable-next-line
const email = (value, allValues, props, name) =>{
  return (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? `[${name}] Invalid email address` : '');
};

// eslint-disable-next-line
const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters' : '');

// eslint-disable-next-line
const phoneNumber = value =>
  (value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits' : '');

const normalizeForm = (value, previousValue, allValues, previousAllValues) => {
  console.log('normalizeForm', value, previousValue, allValues, previousAllValues);
  if (!value) {
    return null;
  }
  return `${value}`;
};

// eslint-disable-next-line
const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  }
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
};

const formatForm = (value, name) => {
  if (!value) {
    return null;
  }
  console.log('formatForm', value, name);
  return `${value}`;
};

const onBlurForm = (event, newValue, previousValue, name) => {
  console.log('onBlurForm', event, newValue, previousValue, name);
};

const onChangeForm = (event, newValue, previousValue, name) => {
  console.log('onChangeForm', event, newValue, previousValue, name);
};

/**
 * 该方法跟normalizeForm有些冲突，故该方法暂时不使用
 * @param value
 * @param name
 * @returns {string}
 * @deprecated
 */
// eslint-disable-next-line
const parseForm = (value, name) => {
  if (!value) {
    return null;
  }
  console.log('parseForm', value, name);
  return `${value}`;
};

export { requiredForm, formatForm, normalizeForm, onBlurForm, onChangeForm, email };
