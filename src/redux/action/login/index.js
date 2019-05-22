import { LOGIN_IN } from '@action/login/actionTypes';

export const loginAction = (data) => {
  return {
    type: LOGIN_IN,
    data,
  };
};
