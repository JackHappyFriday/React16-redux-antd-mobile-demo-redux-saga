/**
 * @author jack
 * @since 20190511
 * @description 版本显示，全局组件，需要显示版本的地方请引入该组件
 */
import React from 'react';
import intl from 'react-intl-universal';
import { APP_VERSION } from '@/constants/constants';
import Style from './Version.module.less';

export default () => {
  return (
    <div className={Style['version-main']}>
      <span className={Style['version-version-span']}>
        [{process.env.ENV}]&nbsp;&nbsp;
        {intl.get('label.version', { version: APP_VERSION })}
      </span>
    </div>
  );
};
