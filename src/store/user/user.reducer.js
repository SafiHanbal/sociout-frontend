import USER_ACTION_TYPES from './user.types';

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
  token: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_TOKEN:
      return { ...state, token: payload };

    case USER_ACTION_TYPES.LOGIN_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case USER_ACTION_TYPES.LOGIN_FAILED:
      return { ...state, isLoading: false, error: payload };

    case USER_ACTION_TYPES.SIGNUP_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case USER_ACTION_TYPES.SIGNUP_FAILED:
      return { ...state, isLoading: false, error: payload };

    case USER_ACTION_TYPES.LOGOUT_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.LOGOUT_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case USER_ACTION_TYPES.LOGOUT_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
