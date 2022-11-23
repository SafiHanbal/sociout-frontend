import { all, call } from 'redux-saga/effects';

import { userSaga } from './user/user.saga';
import { otherUsersSaga } from './other-users/other-users.saga';

export function* rootSaga() {
  yield all([call(userSaga), call(otherUsersSaga)]);
}
