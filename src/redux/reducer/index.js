/* https://github.com/supasate/connected-react-router#step-1 */

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import loginReducer from './loginReducer';
import suspendReducer from './suspendReducer';
import userDataReducer from './userDataReducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  form: reduxFormReducer, // mounted under "form"
  // rest of your reducers
  loginReducer,
  suspendReducer,
  userDataReducer,
});

export default createRootReducer;
