/**
 * axios 工具类
 * 参考： https://www.kancloud.cn/yunye/axios/234845
 * @description:
 * @author jack
 * @date 2019/4/17
*/

import axios from 'axios';
import { API_BASE_URL } from '@/constants/constants';
import storageUtils from './storageUtils';
import authUtils from './authUtils';
import history from '../redux/history';
import { toastError } from './toastUtils';
import { httpResponseError } from './httpErrorUtils';

/**
 * 设置Toast显示的时间，默认秒
 * @type {number}
 */
const TOAST_TIME = 3000;

axios.defaults.timeout = 20 * 1000;

/**
 * 注意这里使用的是API_BASE_URL，需要写api得时候加上/api/v1
 * @type {string}
 */
axios.defaults.baseURL = API_BASE_URL;

// axios request 拦截器, 配置token
axios.interceptors.request.use(
  (config) => {
    // Toast.loading('axios---加载中');
    if (process.env.ENV === 'wx' || process.env.ENV === 'wxqa') {
      if (authUtils.isWXLogin()) {
        const corpId = storageUtils.getItem('corpId') || '';
        const token = storageUtils.getItem(corpId) || '';
        config.headers.Authorization = `Bearer ${token}`;
      }
    } else if (authUtils.isLogin()) {
      config.headers.Authorization = `Bearer ${authUtils.getToken()}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);


// http response 拦截器 处理错误请求
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log('jack----401', error.response, history);
      console.log();
      switch (error.response.status) {
        case 400:
          toastError(httpResponseError(error), TOAST_TIME);
          break;
        case 401 || 403:
          console.log('jack----401/403', error);
          toastError(httpResponseError(error), TOAST_TIME);
          if (process.env.ENV === 'wx') {
            console.log('jack----401', error);
          } else if (process.env.ENV === 'wxqa') {
            console.log('jack----401', error);
          } else {
            // 清空session得值，返回到登录页面
            authUtils.destroy();
            history.replace('/nofond');
          }
          break;
        case 404:
          toastError(httpResponseError(error), TOAST_TIME);
          break;
        case 500:
          toastError(httpResponseError(error), TOAST_TIME);
          break;
        case 502:
          toastError(httpResponseError(error), TOAST_TIME);
          break;
        default:
          break;
      }
    }
    return Promise.reject(error.response);
  },
);


export default axios;
