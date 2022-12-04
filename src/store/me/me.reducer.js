import ME_ACTION_TYPES from './me.types';

const ME_INITIAL_STATE = {
  isLoading: false,
  myPosts: [],
  error: null,

  updateMeLoading: false,
  updateMeError: null,
};

export const meReducer = (state = ME_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ME_ACTION_TYPES.UPDATE_ME_START:
      return { ...state, updateMeLoading: true };
    case ME_ACTION_TYPES.UPDATE_ME_SUCCESS:
      return { ...state, updateMeLoading: false };
    case ME_ACTION_TYPES.UPDATE_ME_FAILED:
      return { ...state, updateMeLoading: false, updateMeError: payload };

    case ME_ACTION_TYPES.GET_MY_POST_START:
      return { ...state, isLoading: true };
    case ME_ACTION_TYPES.GET_MY_POST_SUCCESS:
      return { ...state, isLoading: false, myPosts: payload };
    case ME_ACTION_TYPES.GET_MY_POST_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
