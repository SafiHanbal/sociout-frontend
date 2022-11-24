import { all, call, takeLatest, put } from 'redux-saga/effects';
import POST_ACTION_TYPES from './post.types';
import { apiRequest } from '../../utils/apiRequest';

import { getPostsSuccess, getPostsFailed } from './post.action';

// Get Posts
function* getPostAsync() {
  try {
    const data = yield call(apiRequest, 'api/v1/post');
    if (data.status !== 'success') throw new Error(data.message);

    const { posts } = data.data;
    yield put(getPostsSuccess(posts));
  } catch (err) {
    yield put(getPostsFailed(err));
  }
}

function* onGetPostsStart() {
  yield takeLatest(POST_ACTION_TYPES.GET_POSTS_START, getPostAsync);
}

export function* postSaga() {
  yield all([call(onGetPostsStart)]);
}
