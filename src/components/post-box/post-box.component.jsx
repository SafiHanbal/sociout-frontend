import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../post/post.component';
import { Container } from './post-box.styles';

import { selectPosts, selectIsLoading } from '../../store/post/post.selector';
import { getPostsStart } from '../../store/post/post.action';
const PostBox = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPostsStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {!isLoading && posts.map((post) => <Post key={post._id} post={post} />)}
    </Container>
  );
};

export default PostBox;
