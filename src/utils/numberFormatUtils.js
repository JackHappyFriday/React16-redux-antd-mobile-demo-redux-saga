/**
 *
 * @description: 数值类型format
 * @author jack
 * @date 20190413
 */


/**
 * 格式化数值，
 */
export function formatNumber(value, precision) {
  if (!value) {
    return '';
  }
  if (typeof value === 'string') {
    value = Number(value);
  }
  if (!precision) {
    precision = 2;
  }
  let returnValue = null;
  // eslint-disable-next-line
  if (Math.floor(value) == value) {
    returnValue = (value || 0).toFixed(0);
  } else {
    returnValue = (value || 0).toFixed(precision);
  }
  return returnValue ? Number(returnValue) : 0;
}

export function auth() {
  console.log('auth----');
  return true;
}
