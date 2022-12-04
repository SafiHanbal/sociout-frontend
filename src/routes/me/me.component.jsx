import { useSelector } from 'react-redux';

import UserHeader from '../../components/user-header/user-header.component';
import UserPostBox from '../../components/user-posts-box/user-posts-box.component';

import { Container } from './me.styles';

import { selectUser } from '../../store/user/user.selector';

const Me = () => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <UserHeader user={user} />
      <UserPostBox userId={user?._id} />
    </Container>
  );
};

export default Me;
