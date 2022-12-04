import { all, call, put, takeLatest } from 'redux-saga/effects';
import { API_REQ_TYPES, apiRequest } from '../../utils/apiRequest';

import {
  setToken,
  loginSuccess,
  loginFailed,
  updateMeSuccess,
  updateMeFailed,
  signupSuccess,
  signupFailed,
  logoutSuccess,
  logoutFailed,
} from './user.action';
import USER_ACTION_TYPES from './user.types';

// Login
function* loginUserAsync({ payload: { email, password } }) {
  try {
    const data = yield call(
      apiRequest,
      'api/v1/user/login',
      API_REQ_TYPES.POST,
      { email, password }
    );
    if (data.status !== 'success') throw new Error(data.message);

    const { user, token } = data.data;
    yield put(loginSuccess(user));
    yield put(setToken(token));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

function* onLoginStart() {
  yield takeLatest(USER_ACTION_TYPES.LOGIN_START, loginUserAsync);
}

// Update Me
function* updateMeAsync() {
  try {
    const data = yield call(apiRequest, 'api/v1/user/me');
    if (data.status !== 'success') throw new Error(data.message);

    const { user } = data.data;
    yield put(updateMeSuccess(user));
  } catch (err) {
    yield put(updateMeFailed(err));
  }
}

function* onUpdateMeStart() {
  yield takeLatest(USER_ACTION_TYPES.UPDATE_ME_START, updateMeAsync);
}

// Sign Up

function* signUpAsync({
  payload: { userName, email, password, passwordConfirm },
}) {
  try {
    const data = yield call(
      apiRequest,
      'api/v1/user/signup',
      API_REQ_TYPES.POST,
      {
        userName,
        email,
        password,
        passwordConfirm,
      }
    );
    if (data.status !== 'success') throw new Error(data.message);

    const { user, token } = data.data;
    yield put(signupSuccess(user));
    yield put(setToken(token));
  } catch (err) {
    yield put(signupFailed(err));
  }
}

function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_START, signUpAsync);
}

// Logout

function* logoutAsync() {
  try {
    const data = yield call(apiRequest, 'api/v1/user/logout');
    if (data.status !== 'success') throw new Error(data.message);

    yield put(logoutSuccess(null));
    yield put(setToken(null));
  } catch (err) {
    yield put(logoutFailed(err));
  }
}

function* onLogoutStart() {
  yield takeLatest(USER_ACTION_TYPES.LOGOUT_START, logoutAsync);
}

export function* userSaga() {
  yield all([
    call(onLoginStart),
    call(onUpdateMeStart),
    call(onSignUpStart),
    call(onLogoutStart),
  ]);
}
