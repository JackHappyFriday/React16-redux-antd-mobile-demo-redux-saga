
import { put, takeLatest, call } from 'redux-saga/effects';
import { getUserDataApi } from '@api';
import {
  USERDATA_IN,
  USERDATA_IN_SUCCSESS,
  USERDATA_IN_FAIL,
} from '@action/actionTypes';
import { apiExceptionReturnData } from './dealWithError';

function* workUserData(action) {
  // 执行login操作
  try {
    // 调用API
    const response = yield call(getUserDataApi, action.data);
    if (response && response.status === 200) {
      const responseData = response && response.data;
      yield put({ type: USERDATA_IN_SUCCSESS, data: responseData });
    } else {
      yield put({ type: USERDATA_IN_FAIL, data: apiExceptionReturnData(response.data, '') });
    }
  } catch (error) {
    yield put({ type: USERDATA_IN_FAIL, data: apiExceptionReturnData(error, '') });
  }
}


export default function* watchUserData() {
  // 监听
  yield takeLatest(USERDATA_IN, workUserData);
}

