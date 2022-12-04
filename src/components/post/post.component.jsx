import { useState } from 'react';

import {
  Container,
  Header,
  Avatar,
  Name,
  Time,
  Caption,
  ReactionsContainer,
  CommentIcon,
  ReactionsCount,
} from './post.styles';

import Slider from '../slider/slider.component';
import PostModal from '../post-modal/post-modal.component';
import LikeIcon from '../like-icon/like-icon.component';

const Post = ({ post, preview = false }) => {
  const [postModalActive, setPostModalActive] = useState(false);

  const handleOpenModal = () => setPostModalActive(true);
  const handleCloseModal = () => setPostModalActive(false);

  return (
    <Container>
      <Header>
        <Avatar src={post?.user?.image} alt="user avatar" />
        <Name>{post?.user?.userName}</Name>
        <Time>Yesterday</Time>
      </Header>
      <Slider images={post?.images} preview={preview} />
      {post?.caption && (
        <Caption>
          {post?.caption.length > 100
            ? post?.caption.slice(0, 100) + '...'
            : post?.caption}
        </Caption>
      )}
      {!preview && (
        <>
          <ReactionsCount>
            {`${post?.likesCount} ${post?.likesCount > 1 ? 'Likes' : 'Like'}`} |{' '}
            {`${post?.comments?.length} ${
              post?.comments?.length > 1 ? 'Comments' : 'Comment'
            }`}
          </ReactionsCount>
          <ReactionsContainer>
            <LikeIcon height={40} post={post} />
            <CommentIcon onClick={handleOpenModal} />
          </ReactionsContainer>
        </>
      )}
      <PostModal
        post={post}
        postModalActive={postModalActive}
        handleCloseModal={handleCloseModal}
      />
    </Container>
  );
};

export default Post;
