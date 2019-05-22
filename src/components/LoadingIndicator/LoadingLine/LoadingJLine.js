/**
 * @author jack
 * @date 2019-05-14
 * @description 不需要任何参数，只显示一个小块区域，可以结合其他的自行扩展
 */
import React from 'react';
import Styled from './LoadingJLine.module.less';


const LoadingJLine = () => {
  return (
    <div className={Styled['spinner-j']}>
      <div className={Styled['spinner-div-1']} />
      <div className={Styled['spinner-div-2']} />
      <div className={Styled['spinner-div-3']} />
      <div className={Styled['spinner-div-4']} />
      <div className={Styled['spinner-div-5']} />
    </div>
  );
};

export default LoadingJLine;
