/**
 * 发送HTTP请求错误，解析错误后返回message，前台Toast该Error
 * @param error
 * @param toastTime
 * @param defaultMessage
 * @returns {string}
 */
export function httpResponseError(error, toastTime, defaultMessage = '') {
  let returMessage = '';
  let statusStr = '';
  if (error && error.response) {
    if (error.response.data) {
      if (error.response.data.detail) {
        returMessage = error.response.data.detail;
      } else {
        returMessage = '返回明细信息为空错误';
      }
    } else {
      returMessage = '返回信息为空错误';
    }
    statusStr = `[${error.response.statusText} (${error.response.status})]`;
  } else {
    returMessage = '未知错误';
  }
  return `${returMessage || ''} ${statusStr || ''} ${defaultMessage || ''}`;
}
