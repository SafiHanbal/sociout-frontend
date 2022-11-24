import { useState } from 'react';

import {
  Container,
  Header,
  Avatar,
  Name,
  Time,
  Caption,
  ReactionsContainer,
  LikeIcon,
  CommentIcon,
  LikeContainer,
  ReactionsCount,
} from './post.styles';

import Slider from '../slider/slider.component';

const Post = ({ post }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <Container>
      <Header>
        <Avatar src={post?.user?.image} alt="user avatar" />
        <Name>{post?.user?.userName}</Name>
        <Time>Yesterday</Time>
      </Header>
      <Slider images={post?.images} />
      {post?.caption && (
        <Caption>
          {post?.caption.length > 100
            ? post?.caption.slice(0, 100) + '...'
            : post?.caption}
        </Caption>
      )}
      <ReactionsCount>0 Likes | 0 Comment</ReactionsCount>
      <ReactionsContainer>
        <LikeContainer onClick={handleLike}>
          <LikeIcon like={like ? 1 : 0} />
        </LikeContainer>
        <CommentIcon />
      </ReactionsContainer>
    </Container>
  );
};

export default Post;
