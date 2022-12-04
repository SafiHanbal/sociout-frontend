import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Caption,
  CaptionContainer,
  CommentsContainer,
  Container,
  CustomizedModal,
  ReactionContianer,
  ReactionCounter,
  SliderContainer,
  CustomizedForm,
  CustomizedButton,
} from './post-modal.styles';

import Slider from '../slider/slider.component';
import LikeIcon from '../like-icon/like-icon.component';
import Comment from '../comment/comment.component';

import { commmentOnPostStart } from '../../store/post/post.action';
import { selectPosts } from '../../store/post/post.selector';

const PostModal = ({ post, postModalActive, handleCloseModal }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const [comment, setComment] = useState('');

  const handleOnChange = (event) => {
    setComment(event.target.value);
  };

  const handlePostComment = (event) => {
    event.preventDefault();
    dispatch(commmentOnPostStart({ post: post?._id, comment, posts }));
    setComment('');
  };

  return (
    <CustomizedModal show={postModalActive} onHide={handleCloseModal} centered>
      <Container>
        <SliderContainer>
          <Slider images={post?.images} />
          <LikeIcon height={60} variant="circle" post={post} />
        </SliderContainer>
        <ReactionContianer>
          <CaptionContainer>
            <Caption>{post?.caption}</Caption>
            <ReactionCounter>
              {`${post?.likesCount} ${post?.likesCount > 1 ? 'Likes' : 'Like'}`}{' '}
              |{' '}
              {`${post?.comments?.length} ${
                post?.comments?.length > 1 ? 'Comments' : 'Comment'
              }`}
            </ReactionCounter>
          </CaptionContainer>
          <CommentsContainer>
            {post?.comments.map((comment) => (
              <Comment key={comment?._id} comment={comment} />
            ))}
          </CommentsContainer>
          <CustomizedForm onSubmit={handlePostComment}>
            <CustomizedForm.Group controlId="comment">
              <CustomizedForm.Control
                type="text"
                value={comment}
                onChange={handleOnChange}
                autoFocus
              />
            </CustomizedForm.Group>
            <CustomizedButton type="submit" variant="success">
              Comment
            </CustomizedButton>
          </CustomizedForm>
        </ReactionContianer>
      </Container>
    </CustomizedModal>
  );
};

export default PostModal;
