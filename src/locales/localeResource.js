/**
 * @since 20190509
 * 1. 支持自定义语言，只需要在这里维护即可，
 * 2. 设置语言选择项，只需要在 constants 目录的constants的文件下的LOCALES_SUPPORT增加后选项即可
 *
 */
import en_US from './en_US';
import zh_CN from './zh_CN';
import zh_TW from './zh_TW';
import ja_JP from './ja_JP';

export default {
  'en-US': en_US,
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'ja-JP': ja_JP,
};
