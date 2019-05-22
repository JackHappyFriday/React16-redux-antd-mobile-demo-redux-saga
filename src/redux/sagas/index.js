import { fork } from 'redux-saga/effects';
import watchLogin from './loginSaga';
import watchSuspend from './suspendSaga';
import watchUserData from './userDataSaga';

export default function* rootSaga() {
  // console.log("rootSaga---start");
  // 登录监听
  yield fork(watchLogin);
  // 悬浮按钮监听
  yield fork(watchSuspend);
  // 登录用户信息
  yield fork(watchUserData);
}

