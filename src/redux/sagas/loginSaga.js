
import { put, takeLatest, call } from 'redux-saga/effects';
import { postLoginApi } from '@api/login';
import authUtils from '@utils/authUtils';
import history from '@history';
import {
  LOGIN_IN,
  LOGIN_IN_SUCCESS,
  LOGIN_IN_FAIL,
} from '@action/login/actionTypes';
import { apiExceptionReturnData } from './dealWithError';

function* workLogin(action) {
  // 执行login操作
  try {
    // 这里需要做登录检查
    const response = yield call(postLoginApi, action.data);
    if (response && response.status === 200) {
      const responseData = response && response.data;
      yield put({ type: LOGIN_IN_SUCCESS, data: responseData });
      if (responseData) {
        const tokenValue = responseData.access_token;
        if (tokenValue) {
          // token必须有值
          authUtils.setToken(tokenValue);
          history.replace('/');
        } else {
          yield put({ type: LOGIN_IN_FAIL, data: apiExceptionReturnData(response.data, '') });
        }
      }
    } else {
      yield put({ type: LOGIN_IN_FAIL, data: apiExceptionReturnData(response.data, '') });
    }
  } catch (error) {
    yield put({ type: LOGIN_IN_FAIL, data: apiExceptionReturnData(error, '') });
  }
}


export default function* watchLogin() {
  // 监听login
  yield takeLatest(LOGIN_IN, workLogin);
}

