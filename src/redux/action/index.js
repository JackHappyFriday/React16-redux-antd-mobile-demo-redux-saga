// 如果是各模块私有action，请定义到对应模块目录

import { USERDATA_IN } from '@/redux/action/actionTypes';

export const userDataAction = (data) => {
  return {
    type: USERDATA_IN,
    data,
  };
};

