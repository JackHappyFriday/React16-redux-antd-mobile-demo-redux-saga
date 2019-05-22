import { USERDATA_IN_SUCCSESS, USERDATA_IN_FAIL } from '@action/actionTypes';

const initialState = {
  userDataObj: {},
};
export default function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case USERDATA_IN_SUCCSESS:
      return Object.assign({}, state, { userDataObj: action.data });
    case USERDATA_IN_FAIL:
      return Object.assign({}, state, { userDataObj: action.data });
    default:
      return state;
  }
}
