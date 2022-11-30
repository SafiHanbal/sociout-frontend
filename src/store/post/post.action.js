import { createAction } from '../../utils/createAction';
import POST_ACTION_TYPES from './post.types';

export const getPostsStart = (payload) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_START, payload);
export const getPostsSuccess = (payload) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_SUCCESS, payload);
export const getPostsFailed = (payload) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_FAILED, payload);

export const createPostStart = (payload) =>
  createAction(POST_ACTION_TYPES.CREATE_POST_START, payload);
export const createPostSuccess = (payload) =>
  createAction(POST_ACTION_TYPES.CREATE_POST_SUCCESS, payload);
export const createPostFailed = (payload) =>
  createAction(POST_ACTION_TYPES.CREATE_POST_FAILED, payload);

export const likePostStart = (payload) =>
  createAction(POST_ACTION_TYPES.LIKE_POST_START, payload);
export const likePostSuccess = (payload) =>
  createAction(POST_ACTION_TYPES.LIKE_POST_SUCCESS, payload);
export const likePostFailed = (payload) =>
  createAction(POST_ACTION_TYPES.LIKE_POST_FAILED, payload);

export const unlikePostStart = (payload) =>
  createAction(POST_ACTION_TYPES.UNLIKE_POST_START, payload);
export const unlikePostSuccess = (payload) =>
  createAction(POST_ACTION_TYPES.UNLIKE_POST_SUCCESS, payload);
export const unlikePostFailed = (payload) =>
  createAction(POST_ACTION_TYPES.UNLIKE_POST_FAILED, payload);

export const commmentOnPostStart = (payload) =>
  createAction(POST_ACTION_TYPES.COMMENT_ON_POST_START, payload);
export const commmentOnPostSuccess = (payload) =>
  createAction(POST_ACTION_TYPES.COMMENT_ON_POST_SUCCESS, payload);
export const commmentOnPostFailed = (payload) =>
  createAction(POST_ACTION_TYPES.COMMENT_ON_POST_FAILED, payload);
