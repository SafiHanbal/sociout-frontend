import { createAction } from '../../utils/createAction';
import OTHER_USERS_ACTION_TYPE from './other-users.types';

export const searchUsersStart = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.SEARCH_USERS_START, payload);
export const searchUsersSuccess = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.SEARCH_USERS_SUCCESS, payload);
export const searchUsersFailed = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.SEARCH_USERS_FAILED, payload);

export const getUserStart = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.GET_USER_START, payload);
export const getUserSuccess = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.GET_USER_SUCCESS, payload);
export const getUserFailed = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.GET_USER_FAILED, payload);

export const followUserStart = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.FOLLOW_USER_START, payload);
export const followUserSuccess = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.FOLLOW_USER_SUCCESS, payload);
export const followUserFailed = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.FOLLOW_USER_FAILED, payload);

export const unfollowUserStart = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.UNFOLLOW_USER_START, payload);
export const unfollowUserSuccess = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.UNFOLLOW_USER_SUCCESS, payload);
export const unfollowUserFailed = (payload) =>
  createAction(OTHER_USERS_ACTION_TYPE.UNFOLLOW_USER_FAILED, payload);
