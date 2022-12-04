import POST_ACTION_TYPES from './post.types';

const INITIAL_STATE = {
  isLoading: false,
  posts: [],
  error: null,

  likeLoading: false,
  likeError: null,

  commentLoading: false,
  commentError: null,
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

    case POST_ACTION_TYPES.CREATE_POST_START:
      return { ...state, isLoading: true };
    case POST_ACTION_TYPES.CREATE_POST_SUCCESS:
      return { ...state, isLoading: false };
    case POST_ACTION_TYPES.CREATE_POST_FAILED:
      return { ...state, isLoading: false, error: payload };

    case POST_ACTION_TYPES.LIKE_POST_START:
      return { ...state, likeLoading: true };
    case POST_ACTION_TYPES.LIKE_POST_SUCCESS:
      return { ...state, likeLoading: false, posts: payload };
    case POST_ACTION_TYPES.LIKE_POST_FAILED:
      return { ...state, likeLoading: false, likeError: payload };

    case POST_ACTION_TYPES.UNLIKE_POST_START:
      return { ...state, likeLoading: true };
    case POST_ACTION_TYPES.UNLIKE_POST_SUCCESS:
      return { ...state, likeLoading: false, posts: payload };
    case POST_ACTION_TYPES.UNLIKE_POST_FAILED:
      return { ...state, likeLoading: false, likeError: payload };

    case POST_ACTION_TYPES.COMMENT_ON_POST_START:
      return { ...state, commentLoading: true };
    case POST_ACTION_TYPES.COMMENT_ON_POST_SUCCESS:
      return { ...state, commentLoading: false, posts: payload };
    case POST_ACTION_TYPES.COMMENT_ON_POST_FAILED:
      return { ...state, commentLoading: false, commentError: payload };

    default:
      return state;
  }
};
