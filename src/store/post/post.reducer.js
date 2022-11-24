import POST_ACTION_TYPES from './post.types';

const INITIAL_STATE = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_ACTION_TYPES.GET_POSTS_START:
      return { ...state, isLoading: true };
    case POST_ACTION_TYPES.GET_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: payload };
    case POST_ACTION_TYPES.GET_POSTS_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
