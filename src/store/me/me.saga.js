import { all, call, takeLatest, put } from 'redux-saga/effects';
import { apiRequest } from '../../utils/apiRequest';
import { getMyPostFailed, getMyPostSuccess } from './me.action';
import ME_ACTION_TYPES from './me.types';

// update Me
function* updateMeAsync() {
  try {
    yield;
  } catch (err) {
    yield;
  }
}

function* onUpdateMeStart() {
  yield takeLatest(ME_ACTION_TYPES.UPDATE_ME_START, updateMeAsync);
}

// Get my Posts
function* getMyPostsAsync({ payload: userId }) {
  try {
    const res = yield call(apiRequest, `api/v1/post?user=${userId}`);
    if (res.status !== 'success') throw new Error(res.message);

    const { posts } = res.data;
    yield put(getMyPostSuccess(posts));
  } catch (err) {
    yield put(getMyPostFailed(err));
  }
}

function* onGetMyPostsStart() {
  yield takeLatest(ME_ACTION_TYPES.GET_MY_POST_START, getMyPostsAsync);
}

// Me Saga
export function* meSaga() {
  yield all([call(onUpdateMeStart), call(onGetMyPostsStart)]);
}
