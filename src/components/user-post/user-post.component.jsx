import { useState } from 'react';

import {
  CommentIcon,
  Container,
  Image,
  LikeIcon,
  Overlay,
  ReactionCounter,
  ReactionText,
} from './user-post.styles';

import PostModal from '../post-modal/post-modal.component';

const UserPost = ({ post }) => {
  const [postModalActive, setPostModalActive] = useState(false);

  const handleOpenModal = () => setPostModalActive(true);
  const handleCloseModal = () => setPostModalActive(false);
  return (
    <>
      <Container onClick={handleOpenModal}>
        <Image src={post?.images[0]} />
        <Overlay>
          <ReactionCounter>
            <ReactionText>
              <LikeIcon /> {post?.likesCount}
            </ReactionText>
            <ReactionText>
              <CommentIcon /> {post?.comments.length}
            </ReactionText>
          </ReactionCounter>
        </Overlay>
      </Container>
      <PostModal
        post={post}
        postModalActive={postModalActive}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default UserPost;
