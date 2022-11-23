import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { otherUsersReducer } from './other-users/other-users.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  otherUsers: otherUsersReducer,
});

export default rootReducer;
