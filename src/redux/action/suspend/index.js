import * as actions from './actionTypes';

export const suspendAction = (data) => {
  return {
    type: actions.SUSPEND_IN,
    data,
  };
};
