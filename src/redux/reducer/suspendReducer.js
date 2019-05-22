import { SUSPEND_IN_SUCCESS, SUSPEND_IN_FAIL } from '../action/suspend/actionTypes';

const initialState = {
  suspendDataObj: {},
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SUSPEND_IN_SUCCESS:
      return Object.assign({}, state, { suspendDataObj: action.data });
    case SUSPEND_IN_FAIL:
      return Object.assign({}, state, { suspendDataObj: action.data });
    default:
      return state;
  }
}
