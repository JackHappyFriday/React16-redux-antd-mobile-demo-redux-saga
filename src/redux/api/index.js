/**
 * @author jack
 * @date 2019-05-21
 */
import axios from '@utils/axiosUtils';
import storageUtils from '@utils/storageUtils';
import { stringify } from '@utils/CpUtils';
import { LANG_STORAGE_DEFAULT, LANG_TYPE_DEFAULT } from '@/constants/constants';

/**
 * 获取当前语言
 * @returns {*}
 */
function getLanguage() {
  return storageUtils.getItem(LANG_STORAGE_DEFAULT.lang_type) || LANG_TYPE_DEFAULT;
}

/**
 * 获取登录用户信息
 * @returns {AxiosPromise<any>}
 */
export function getUserDataApi() {
  return axios.get(`/user?locale=${getLanguage()}`);
}

/**
 * @param data
 * @returns {AxiosPromise<any>}
 */
export function postAttachmentApi(data) {
  return axios.post(
    `/other?locale=${getLanguage()}`,
    JSON.parse(stringify(data)),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
}
