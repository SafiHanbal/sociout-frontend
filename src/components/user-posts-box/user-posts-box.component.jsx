import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './user-posts-box.styles';

import { getMyPostStart } from '../../store/me/me.action';
import { selectMyPosts } from '../../store/me/me.selctor';
import UserPost from '../user-post/user-post.component';

const UserPostBox = ({userId}) => {
  const dispatch = useDispatch();
  const myPosts = useSelector(selectMyPosts);


  useEffect(() => {
    dispatch(getMyPostStart(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {myPosts.map((myPost) => (
        <UserPost key={myPost?._id} post={myPost} />
      ))}
    </Container>
  );
};

export default UserPostBox;
