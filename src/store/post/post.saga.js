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
  unlikePostSuccess,
  unlikePostFailed,
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
function* likePostAsync({ payload: { posts, postId } }) {
  try {
    const data = yield call(apiRequest, `api/v1/like/${postId}`);
    if (data.status !== 'success') throw new Error(data.message);

    const newPosts = posts.map((post) => {
      if (post?._id === postId)
        return { ...post, isLiked: true, likesCount: post?.likesCount + 1 };
      else return post;
    });

    yield put(likePostSuccess(newPosts));
  } catch (err) {
    yield put(likePostFailed(err));
  }
}

function* onLikePostStart() {
  yield takeLatest(POST_ACTION_TYPES.LIKE_POST_START, likePostAsync);
}

// Unlike Post
function* unlikePostAsync({ payload: { posts, postId } }) {
  try {
    const data = yield call(
      apiRequest,
      `api/v1/like/${postId}`,
      API_REQ_TYPES.DELETE
    );
    if (data.status !== 'success') throw new Error(data.message);

    const newPosts = posts.map((post) => {
      if (post?._id === postId)
        return { ...post, isLiked: false, likesCount: post?.likesCount - 1 };
      else return post;
    });
    yield put(unlikePostSuccess(newPosts));
  } catch (err) {
    yield put(unlikePostFailed(err));
  }
}

function* onUnlikePostStart() {
  yield takeLatest(POST_ACTION_TYPES.UNLIKE_POST_START, unlikePostAsync);
}

// Post Saga
export function* postSaga() {
  yield all([
    call(onGetPostsStart),
    call(onCreatePostStart),
    call(onLikePostStart),
    call(onUnlikePostStart),
  ]);
}
