import { all, call, takeLatest, put } from 'redux-saga/effects';
import POST_ACTION_TYPES from './post.types';
import { apiRequest, API_REQ_TYPES } from '../../utils/apiRequest';

import {
  getPostsSuccess,
  getPostsFailed,
  createPostSuccess,
  createPostFailed,
  likePostSuccess,
  likePostFailed,
} from './post.action';

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

// Create Post
function* createPostAsync({ payload: formData }) {
  try {
    const data = yield call(
      apiRequest,
      'api/v1/post',
      API_REQ_TYPES.POST,
      formData,
      true
    );
    if (data.status !== 'success') throw new Error(data.message);

    yield put(createPostSuccess());
  } catch (err) {
    yield put(createPostFailed(err));
  }
}

function* onCreatePostStart() {
  yield takeLatest(POST_ACTION_TYPES.CREATE_POST_START, createPostAsync);
}

// Like Post
function* likePostAsync({ payload: postId }) {
  try {
    const data = yield call(apiRequest, `api/v1/like/${postId}`);
    if (data.status !== 'success') throw new Error(data.message);

    yield put(likePostSuccess(data));
  } catch (err) {
    yield put(likePostFailed(err));
  }
}

function* onLikePostStart() {
  yield takeLatest(POST_ACTION_TYPES.LIKE_POST_START, likePostAsync);
}

export function* postSaga() {
  yield all([
    call(onGetPostsStart),
    call(onCreatePostStart),
    call(onLikePostStart),
  ]);
}
