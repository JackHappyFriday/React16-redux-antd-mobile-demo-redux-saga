import React from 'react';
import Styled from './LoadingJRound.module.less';


const LoadingJRound = () => {
  return (
    (
      <div className={Styled['loading-round-main']}>
        <div className={Styled['loading-round-content']}>
          <div className={Styled['loading-round-round']}>
            <span className={Styled['loading-round-dot']} />
          </div>
          <div className={Styled['loading-round-text']}>
            <p className={Styled['loading-round-text-p']}>LOADING</p>
          </div>
        </div>
      </div>
    )
  );
};

export default LoadingJRound;
