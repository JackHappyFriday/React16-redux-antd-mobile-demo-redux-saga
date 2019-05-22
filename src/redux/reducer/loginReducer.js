import { LOGIN_IN_SUCCESS, LOGIN_IN_FAIL } from '@action/login/actionTypes';

const initialState = {
  loginDataObj: {},
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_IN_SUCCESS:
      return Object.assign({}, state, { loginDataObj: action.data });
    case LOGIN_IN_FAIL:
      return Object.assign({}, state, { loginDataObj: action.data });
    default:
      return state;
  }
}
