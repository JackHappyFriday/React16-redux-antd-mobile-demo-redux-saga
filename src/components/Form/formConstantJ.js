/**
 * @description Form表单使用的常量数据
 * @author jack
 * @date 20190410
 */

import { addYears, subYears } from 'date-fns/esm';

const now = new Date();

/**
 * 最大时间
 * @type {Date | *}
 */
const maxDate = addYears(new Date(now.getFullYear(), 0, 1), 2);

/**
 * 最小时间
 * @type {Date | *}
 */
const minDate = subYears(new Date(now.getFullYear(), 0, 1), 2);

/** form 页面 column字段校验后 是否显示错误或者警告信息，默认不显示（设置为false） */
export const COLUMN_SHOW_WARN_OR_ERROR = false;

export {
  maxDate,
  minDate,
};
