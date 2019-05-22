
import { put, takeLatest } from 'redux-saga/effects';
import {
  SUSPEND_IN,
  SUSPEND_IN_SUCCESS,
  SUSPEND_IN_FAIL,
} from '../action/suspend/actionTypes';
import { apiExceptionReturnData } from './dealWithError';

function* workSuspend(action) {
  try {
    yield console.log('workSuspend', action);
    yield put({ type: SUSPEND_IN_SUCCESS, data: action.data });
  } catch (error) {
    yield put({ type: SUSPEND_IN_FAIL, data: apiExceptionReturnData(error, '') });
  }
}

export default function* watchSuspend() {
  // 监听Suspend
  yield takeLatest(SUSPEND_IN, workSuspend);
}

