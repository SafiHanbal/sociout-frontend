import { all, call, takeLatest, put } from 'redux-saga/effects';
import OTHER_USERS_ACTION_TYPE from './other-users.types';
import { API_REQ_TYPES, apiRequest } from '../../utils/apiRequest';

import {
  searchUsersSuccess,
  searchUsersFailed,
  getUserSuccess,
  getUserFailed,
  followUserSuccess,
  followUserFailed,
  unfollowUserSuccess,
  unfollowUserFailed,
} from './other-users.action';
import { updateMeStart } from '../user/user.action';

// Search User
function* searchUsersAsync({ payload: searchStr }) {
  try {
    const data = yield call(
      apiRequest,
      `api/v1/user/search?userName=${searchStr}`
    );
    if (data.status !== 'success') throw new Error(data.message);

    const { users } = data.data;
    yield put(searchUsersSuccess(users));
  } catch (err) {
    yield put(searchUsersFailed(err));
  }
}

function* onSearchUsersStart() {
  yield takeLatest(
    OTHER_USERS_ACTION_TYPE.SEARCH_USERS_START,
    searchUsersAsync
  );
}

// Get User
function* getUserAsync({ payload: userId }) {
  try {
    const data = yield call(apiRequest, `api/v1/user/${userId}`);
    if (data.status !== 'success') throw new Error(data.message);
    const user = data.data.data;
    console.log(user);
    yield put(getUserSuccess(user));
  } catch (err) {
    yield put(getUserFailed(err));
  }
}

function* onGetUserStart() {
  yield takeLatest(OTHER_USERS_ACTION_TYPE.GET_USER_START, getUserAsync);
}

// Follow User
function* followUserAsync({ payload: userId }) {
  try {
    const data = yield call(
      apiRequest,
      `api/v1/user/follow/${userId}`,
      API_REQ_TYPES.PATCH
    );
    if (data.status !== 'success') throw new Error(data.message);

    const { user } = data.data;
    yield put(followUserSuccess(user));
    yield put(updateMeStart());
  } catch (err) {
    yield put(followUserFailed(err));
  }
}

function* onFollowUserStart() {
  yield takeLatest(OTHER_USERS_ACTION_TYPE.FOLLOW_USER_START, followUserAsync);
}

// Unfollow User
function* unfollowUserAsync({ payload: userId }) {
  try {
    const data = yield call(
      apiRequest,
      `api/v1/user/unfollow/${userId}`,
      API_REQ_TYPES.PATCH
    );
    if (data.status !== 'success') throw new Error(data.message);

    const { user } = data.data;
    yield put(unfollowUserSuccess(user));
    yield put(updateMeStart());
  } catch (err) {
    yield put(unfollowUserFailed(err));
  }
}

function* onUnfollowUserStart() {
  yield takeLatest(
    OTHER_USERS_ACTION_TYPE.UNFOLLOW_USER_START,
    unfollowUserAsync
  );
}

export function* otherUsersSaga() {
  yield all([
    call(onSearchUsersStart),
    call(onGetUserStart),
    call(onUnfollowUserStart),
    call(onFollowUserStart),
  ]);
}
