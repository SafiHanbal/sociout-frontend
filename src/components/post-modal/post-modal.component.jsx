import {
  Caption,
  CaptionContainer,
  CommentContainer,
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

const PostModal = ({ post, postModalActive, handleCloseModal }) => {
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
              {post?.likesCount} Likes | 0 Comments
            </ReactionCounter>
          </CaptionContainer>
          <CommentContainer></CommentContainer>
          <CustomizedForm>
            <CustomizedForm.Group controlId="comment">
              <CustomizedForm.Control type="text" autoFocus />
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
