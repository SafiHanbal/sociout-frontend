import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container } from './user.styles';
import UserHeader from '../../components/user-header/user-header.component';
import Loader from '../../components/loader/loader.component';

import { getUserStart } from '../../store/other-users/other-users.action';
import {
  selectUser,
  selectUserLoading,
} from '../../store/other-users/other-users.selector';

const User = () => {
  const dispatch = useDispatch();
  const userId = useParams()._id;
  const selectedUser = useSelector(selectUser);
  const userLoading = useSelector(selectUserLoading);

  useEffect(() => {
    dispatch(getUserStart(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <Container>
      {userLoading ? (
        <Loader absolute={1} size={50} />
      ) : (
        <>
          <UserHeader user={selectedUser} />
        </>
      )}
    </Container>
  );
};

export default User;
