import { createAction } from '../../utils/createAction';
import POST_ACTION_TYPES from './post.types';

export const getPostsStart = (payload) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_START, payload);
export const getPostsSuccess = (payload) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_SUCCESS, payload);
export const getPostsFailed = (payload) =>
  createAction(POST_ACTION_TYPES.GET_POSTS_FAILED, payload);
