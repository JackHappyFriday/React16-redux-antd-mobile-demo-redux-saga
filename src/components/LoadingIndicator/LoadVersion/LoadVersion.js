/**
 * @author jack
 * @date 2019-05-14
 * @description 带版本的loading页面,根据自定义的load控件替换下面的content即可
 */
import React from 'react';
import LoadingLine from '../LoadingLine';
import Version from '../../Version';
import Style from './LoadVersion.module.less';

export default () => {
  return (
    <div className={Style['loadVersion-main']}>
      <div className={Style['loadVersion-content']}>
        <LoadingLine />
      </div>
      <div className={Style['loadVersion-footer']}>
        <Version />
      </div>
    </div>
  );
};
