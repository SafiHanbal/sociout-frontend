import OTHER_USERS_ACTION_TYPE from './other-users.types';

const INITIAL_STATE = {
  searchedUsers: [],
  isLoading: false,
  error: null,

  userLoading: false,
  user: null,
  userError: null,

  followUserLoading: false,
  followUserError: null,
};

export const otherUsersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case OTHER_USERS_ACTION_TYPE.SEARCH_USERS_START:
      return { ...state, isLoading: true };
    case OTHER_USERS_ACTION_TYPE.SEARCH_USERS_SUCCESS:
      return { ...state, isLoading: false, searchedUsers: payload };
    case OTHER_USERS_ACTION_TYPE.SEARCH_USERS_FAILED:
      return { ...state, isLoading: false, error: payload };

    case OTHER_USERS_ACTION_TYPE.GET_USER_START:
      return { ...state, userLoading: true };
    case OTHER_USERS_ACTION_TYPE.GET_USER_SUCCESS:
      return { ...state, userLoading: false, user: payload };
    case OTHER_USERS_ACTION_TYPE.GET_USER_FAILED:
      return { ...state, userLoading: false, userError: payload };

    case OTHER_USERS_ACTION_TYPE.FOLLOW_USER_START:
      return { ...state, followUserLoading: true };
    case OTHER_USERS_ACTION_TYPE.FOLLOW_USER_SUCCESS:
      return { ...state, followUserLoading: false, user: payload };
    case OTHER_USERS_ACTION_TYPE.FOLLOW_USER_FAILED:
      return { ...state, followUserLoading: false, followUserError: payload };

    case OTHER_USERS_ACTION_TYPE.UNFOLLOW_USER_START:
      return { ...state, followUserLoading: true };
    case OTHER_USERS_ACTION_TYPE.UNFOLLOW_USER_SUCCESS:
      return { ...state, followUserLoading: false, user: payload };
    case OTHER_USERS_ACTION_TYPE.UNFOLLOW_USER_FAILED:
      return { ...state, followUserLoading: false, followUserError: payload };

    default:
      return state;
  }
};
