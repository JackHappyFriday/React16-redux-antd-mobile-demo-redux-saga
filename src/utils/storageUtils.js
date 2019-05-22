/**
 * @description: storage 操作缓存工具类
 * @author jack
 * @date 2019/4/17
*/


const { localStorage, sessionStorage } = window;

export default {
  /**
   * 设置 localStorage 存储
   * @param key {string} 键值
   * @data data {object} 数据
   */
  setItem(key, data) {
    if (!key || !data) {
      console.error('storageUtils--setItem params is null', key, data);
      return;
    }
    localStorage.setItem(key, data);
  },

  /**
   * 获取 localStorage 存储
   * @param key {string} 键值
   */
  getItem(key) {
    if (!key) {
      console.error('storageUtils--getItem params is null', key);
      return null;
    }
    return localStorage.getItem(key);
  },

  /**
   * 移除 localStorage 存储
   * @param key {string} 键值
   */
  removeItem(key) {
    if (!key) {
      console.error('storageUtils--removeItem params is null', key);
      return;
    }
    localStorage.removeItem(key);
  },

  /**
   * 清空 localStorage 存储
   */
  clearLocal() {
    if (true) {
      console.warn('storageUtils--clear params is null');
    }
    localStorage.clear();
  },

  /**
   *
   * @param key
   * @param data
   */
  setItemObjSession(key, data) {
    if (!key || !data) {
      console.error('storageUtils--setItemObjSession params is null', key, data);
      return;
    }
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('storageUtils--setItemObjSession 异常', error);
    }
  },

  /**
   * 获取存储,会将返回值解析成json
   * @param key {string} 键值
   */
  getItemObjSession(key) {
    if (!key) {
      console.error('storageUtils--getItemObjSession params is null', key);
      return null;
    }
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (error) {
      console.error('storageUtils--getItemObjSession 异常', error);
    }
    return null;
  },


  /**
   * 设置 sessionStorage 存储
   * @param key {string} 键值
   * @data data string/number  不会被转成json数据
   */
  setItemStrSession(key, data) {
    if (!key || !data) {
      console.error('storageUtils--setItemStrSession params is null', key, data);
      return;
    }
    sessionStorage.setItem(key, data);
  },

  /**
   * 获取 sessionStorage 存储，直接返回
   * @param key {string} 键值
   */
  getItemStrSession(key) {
    if (!key) {
      console.error('storageUtils--getItemStrSession params is null', key, data);
      return null;
    }
    return sessionStorage.getItem(key);
  },

  /**
   * session sessionStorage 删除
   * @param key
   */
  removeItemSession(key) {
    if (!key) {
      console.error('storageUtils--removeItemSession params is null', key);
      return;
    }
    sessionStorage.removeItem(key);
  },

  /**
   *清空 sessionStorage 存储
   */
  clearSession() {
    if (true) {
      console.warn('storageUtils--clearSession params is null');
    }
    sessionStorage.clear();
  },
};
