/**
 * @author jack
 * @date 2019-05-15
 * @description 处理所有Icon图标获取，可以设置从网络获取，也可以设置从本地获取，
 * 如果从本地获取，需要将图片放到本地的assets/imgages目录
 */

import { DEFAULT_CLAIM_ICON_NAME, ICON_USE_HTTP_URL,
  ICON_HTTP_BASE_URL, IconSuffixSet } from '@/constants/constants';

/**
 * 传入图片名称，判断如果名称为空直接报错，如果后缀名为空，自动补全.png
 * @param iconName
 * @returns {*}
 */
function hasIconSuffix(iconName) {
  const iconSuffix = '.png';
  if (!iconName) {
    return new Error('[iconUtils -> hasIconSuffix] param iconName is null');
  }
  if (iconName.startsWith('.') || iconName.endsWith('.')) {
    // 如果是.开头的去掉点，如果是多个点，怎么办？我认为直接 throw Error比较合适
    throw new Error('[iconUtils -> hasIconSuffix] param iconName is illegal');
  }
  const currentSuffix = iconName && iconName.substring(iconName.lastIndexOf('.'));
  if (IconSuffixSet.has(currentSuffix)) {
    return iconName;
  }
  return `${iconName}${iconSuffix}`;
}

/**
 * 单据头/行获取Icon图标，这里处理了异常和默认值逻辑
 * @param iconName
 * @param defaultName
 * @returns {*}
 */
export function getExpHeaderOrLineIcon(iconName, defaultName) {
  try {
    const returnIcon = iconName || defaultName || DEFAULT_CLAIM_ICON_NAME;
    let iconPath = '';
    if (ICON_USE_HTTP_URL) {
      iconPath = ICON_HTTP_BASE_URL;
      return `${iconPath}${hasIconSuffix(returnIcon)}`;
    }
    return require(`@assets/images/${hasIconSuffix(returnIcon)}`); // eslint-disable-line
  } catch (e) {
    console.log('[iconUtils -> getExpHeaderOrLineIcon] catch', iconName, defaultName, e);
    return require(`@assets/images/${hasIconSuffix(DEFAULT_CLAIM_ICON_NAME)}`); // eslint-disable-line
  }
}

export function f() {
}
