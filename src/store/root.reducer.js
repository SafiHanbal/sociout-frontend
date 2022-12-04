import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { otherUsersReducer } from './other-users/other-users.reducer';
import { postReducer } from './post/post.reducer';
import { meReducer } from './me/me.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  otherUsers: otherUsersReducer,
  post: postReducer,
  me: meReducer,
});

export default rootReducer;
