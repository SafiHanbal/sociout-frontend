import { createAction } from '../../utils/createAction';
import ME_ACTION_TYPES from './me.types';

export const updateMeStart = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_ME_START, payload);
export const updateMeSuccess = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_ME_SUCCESS, payload);
export const updateMeFailed = (payload) =>
  createAction(ME_ACTION_TYPES.UPDATE_ME_FAILED, payload);

export const getMyPostStart = (payload) =>
  createAction(ME_ACTION_TYPES.GET_MY_POST_START, payload);
export const getMyPostSuccess = (payload) =>
  createAction(ME_ACTION_TYPES.GET_MY_POST_SUCCESS, payload);
export const getMyPostFailed = (payload) =>
  createAction(ME_ACTION_TYPES.GET_MY_POST_FAILED, payload);
