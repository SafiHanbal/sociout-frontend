import { useDispatch, useSelector } from 'react-redux';

import { Container, HeartIcon } from './like-icon.styles';

import { likePostStart, unlikePostStart } from '../../store/post/post.action';
import { selectPosts } from '../../store/post/post.selector';

const LikeIcon = ({ height, variant, post }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const handleOnClick = () => {
    if (post?.isLiked) dispatch(unlikePostStart({ posts, postId: post?._id }));
    if (!post?.isLiked) dispatch(likePostStart({ posts, postId: post?._id }));
  };

  return (
    <Container variant={variant} height={height} onClick={handleOnClick}>
      <HeartIcon like={post?.isLiked ? 1 : 0} height={height} />
    </Container>
  );
};

export default LikeIcon;
