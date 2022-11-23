import { Avatar, Container, Name } from './user-card.styles';

const UserCard = ({ user, onClick }) => {
  return (
    <Container>
      <Avatar src={user?.image} />
      <Name>{user?.userName}</Name>
    </Container>
  );
};

export default UserCard;
