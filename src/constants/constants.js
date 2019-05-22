/**
 *
 * @description: 常量配置
 * form页面的设置在components/Form/formConstantJ.js文件中
 * @author jack
 * @date 20190415
 */

import config from './config';

export const APP_VERSION = '2.0.0';
/**
 * 默认列表一页显示多少条记录
 * @type {number}
 */
export const PAGE_SIZE_DEFAULT = 10;

/**
 * 刷新时页面默认200毫秒之后刷新，单位毫秒
 * @type {number}
 */
export const PULL_TO_FRESH_TIME_OUT = 2000;

/** 当前 host */
const HOST = window.location.host;

/** 开发环境标示常量 */
const DEVELOPMENT = 'DEVELOPMENT';

/** 生产环境标示常量 */
const PRODUCTION = 'PRODUCTION';

/**
 * 判断当前环境
 */
const ENV = (function () {
  if (HOST.indexOf('127.0.0.1') > -1 || HOST.indexOf('localhost') > -1 || HOST.indexOf('192.168.') > -1) {
    return DEVELOPMENT;
  }
  return PRODUCTION;
}());

/**
 * 设置 Base 地址
 */
const BASE_URL = (function () {
  if (ENV === DEVELOPMENT) {
    return `https://${config.dev.apiHost}`;
  }
  return `${process.env.COMMON_BASE_URL}`;
}());

/**
 * api地址的前半部分(不包括/api/v1部分，如果需要/api/v1 需要使用API_V1_URL)
 * @type {string}
 */
export const API_BASE_URL = BASE_URL;

/**
 * api地址的前半部分(包括/api/v1部分，如果不需要/api/v1 需要使用API_BASE_URL)
 * @type {string}
 */
export const API_V1_URL = `${BASE_URL}/api/v1`;

/**
 * 默认的语言类型
 * @type {string}
 */
export const LANG_TYPE_DEFAULT = 'zh-CN';

/**
 * 目前支持的语言类型
 * @type {*[]}
 * classname 图标名称
 */
export const LANG_SUPPORT = [
  {
    name: 'English',
    value: 'en-US',
    classname: 'langen',
  },
  {
    name: '简体中文',
    value: 'zh-CN',
    classname: 'langzh',
  },
  {
    name: '繁體中文',
    value: 'zh-TW',
    classname: 'langtw',
  },
  {
    name: '日本の',
    value: 'ja-JP',
    classname: 'langjp',
  },
];

/** 默认语言存在localStorage的key或者其他键值对 */
export const LANG_STORAGE_DEFAULT = {
  lang_type: 'lang_type', // 语言常量
};

/** API错误返回码 */
export const API_ERROR_CODE = 1;

export const TOKEN = 'TOKEN';

/** 全局header是否隐藏 ， true 表示隐藏所有header */
export const HEADER_HIDDEN_ALL = false;

/** 全局默认的icon图标，不穿入就显示默认值，前提请保证默认值一定存在 */
export const DEFAULT_CLAIM_ICON_NAME = 'default_exp_header.png';

/** 全局icon图标后缀 */
export const IconSuffixSet = new Set(['.png', '.jpg', '.jpeg', 'bmp']);

/**
 * 拼接网络Icon图片地址
 * @type {string}
 */
export const ICON_HTTP_BASE_URL = `${process.env.COMMON_BASE_DOMAIN}/h5/assets/images/`;
/** Icon图标是否使用网络图标，false表示不使用 */
export const ICON_USE_HTTP_URL = false;


/**
 * storage Key, 注意是个object类型
 * @type {{}}
 */
export const STORAGE_KEY_PREFIX = {
  header_img_url: 'HEADER_IMG_URL',
};
