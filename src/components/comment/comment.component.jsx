import { Avatar, CommentText, Container, Name } from './comment.styles';

const Comment = ({ comment }) => {
  return (
    <Container>
      <Avatar src={comment?.user?.image} alt="user image" />
      <div>
        <Name>{comment?.user?.userName}</Name>
        <CommentText>{comment?.comment}</CommentText>
      </div>
    </Container>
  );
};

export default Comment;
