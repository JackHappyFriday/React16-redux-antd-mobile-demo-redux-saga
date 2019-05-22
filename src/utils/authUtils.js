/**
 * @description:
 * @author jack
 * @date 2019/4/17
*/

import __isEmpty from 'lodash/isEmpty';
import storageUtils from './storageUtils';
import { TOKEN } from '../constants/constants';

export default {
  /**
   * 跳转认证
   * @return {boolean}
   */
  auth() {
    console.log('auth----');
    return true;
  },

  /**
   * 是否登录
   */
  isLogin() {
    return !__isEmpty(this.getToken());
  },

  /**
   * 微信是否登录，true 表示微信登录
   * @returns {boolean}
   */
  isWXLogin() {
    const corpId = storageUtils.getItem('corpId') || '';
    const token = storageUtils.getItem(corpId) || '';
    return !__isEmpty(token);
  },

  /**
   * 设置 token
   * @param token
   */
  setToken(token) {
    storageUtils.setItem(TOKEN, token);
  },

  /**
   * 获取 token
   */
  getToken() {
    return storageUtils.getItem(TOKEN) || '';
  },

  /**
   * 移除 token
   */
  destroy() {
    storageUtils.removeItem(TOKEN);
    storageUtils.clearSession();
  },
};
