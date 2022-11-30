import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/user.selector';

import {
  Arrow,
  Avatar,
  Bio,
  Container,
  CustomizedLink,
  Name,
  StatsContainer,
  StatsHeading,
  StatsText,
} from './current-user-card.styles';

const CurrentUserCard = () => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Avatar src={user?.image} alt="user avatar" />
      <Name>{user?.userName}</Name>
      <StatsContainer>
        <div>
          <StatsHeading>Followers</StatsHeading>
          <StatsText>{`${user?.followerCount}`}</StatsText>
        </div>
        <div>
          <StatsHeading>Following</StatsHeading>
          <StatsText>{`${user?.following?.length}`}</StatsText>
        </div>
      </StatsContainer>
      <Bio>
        {user?.bio?.length > 70 ? `${user?.bio.slice(0, 70)}...` : user?.bio}
      </Bio>

      <CustomizedLink to="/me">
        View More
        <Arrow />
      </CustomizedLink>
    </Container>
  );
};

export default CurrentUserCard;
