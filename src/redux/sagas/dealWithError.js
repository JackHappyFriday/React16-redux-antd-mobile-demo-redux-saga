import { API_ERROR_CODE } from '@/constants/constants';

/**
 * 统一api异常处理
 * @date 2019-05-11
 * @param {object} error
 * @param {string} default_message
 * @returns {object}
 */
export function apiExceptionReturnData(error, default_message) {
  let errorData = {};
  if (error && error.data) {
    errorData = error.data;
  } else {
    errorData = { error_message: default_message || '返回值为空，未知错误' };
  }
  return Object.assign({}, { error_code: API_ERROR_CODE }, errorData);
}

export function f() {

}
