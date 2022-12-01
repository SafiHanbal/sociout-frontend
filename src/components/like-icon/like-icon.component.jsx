import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, HeartIcon } from './like-icon.styles';

import { likePostStart, unlikePostStart } from '../../store/post/post.action';

const LikeIcon = ({ height, variant, postId }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  const handleOnClick = () => {
    setLike(!like);

    if (like) dispatch(unlikePostStart(postId));
    if (!like) dispatch(likePostStart(postId));
  };

  return (
    <Container variant={variant} height={height} onClick={handleOnClick}>
      <HeartIcon like={like ? 1 : 0} height={height} />
    </Container>
  );
};

export default LikeIcon;
