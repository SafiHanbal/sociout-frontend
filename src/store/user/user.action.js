import { createAction } from '../../utils/createAction';
import USER_ACTION_TYPES from './user.types';

export const setToken = (paylod) =>
  createAction(USER_ACTION_TYPES.SET_TOKEN, paylod);

export const loginStart = (paylod) =>
  createAction(USER_ACTION_TYPES.LOGIN_START, paylod);
export const loginSuccess = (paylod) =>
  createAction(USER_ACTION_TYPES.LOGIN_SUCCESS, paylod);
export const loginFailed = (paylod) =>
  createAction(USER_ACTION_TYPES.LOGIN_FAILED, paylod);

export const signupStart = (paylod) =>
  createAction(USER_ACTION_TYPES.SIGNUP_START, paylod);
export const signupSuccess = (paylod) =>
  createAction(USER_ACTION_TYPES.SIGNUP_SUCCESS, paylod);
export const signupFailed = (paylod) =>
  createAction(USER_ACTION_TYPES.SIGNUP_FAILED, paylod);

export const logoutStart = (paylod) =>
  createAction(USER_ACTION_TYPES.LOGOUT_START, paylod);
export const logoutSuccess = (paylod) =>
  createAction(USER_ACTION_TYPES.LOGOUT_SUCCESS, paylod);
export const logoutFailed = (paylod) =>
  createAction(USER_ACTION_TYPES.LOGOUT_FAILED, paylod);
