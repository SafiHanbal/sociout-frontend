import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/user.selector';

import InterestIcon from '../../assets/interest.png';
import CalendarIcon from '../../assets/calendar.png';

import {
  Arrow,
  Avatar,
  Bio,
  Container,
  CustomizedLink,
  InfoContainer,
  InfoIcon,
  InfoText,
  Name,
  StatsContainer,
  StatsHeading,
  StatsText,
} from './current-user-card.styles';

const CurrentUserCard = () => {
  const user = useSelector(selectUser);
  const {
    image,
    userName,
    followerCount,
    following,
    bio,
    interests,
    dateOfBirth,
  } = user;
  return (
    <Container>
      <Avatar src={image} alt="user avatar" />
      <Name>{userName}</Name>
      <StatsContainer>
        <div>
          <StatsHeading>Followers</StatsHeading>
          <StatsText>{`${followerCount}`}</StatsText>
        </div>
        <div>
          <StatsHeading>Following</StatsHeading>
          <StatsText>{`${following.length}`}</StatsText>
        </div>
      </StatsContainer>
      <Bio>{bio.length > 70 ? `${bio.slice(0, 70)}...` : bio}</Bio>
      {interests.length && (
        <InfoContainer>
          <InfoIcon src={InterestIcon} alt="interest icon" />
          <InfoText>{interests[0]}</InfoText>
        </InfoContainer>
      )}
      {dateOfBirth && (
        <InfoContainer>
          <InfoIcon src={CalendarIcon} alt="interest icon" />
          <InfoText>{interests[0]}</InfoText>
        </InfoContainer>
      )}

      <CustomizedLink to="/user">
        View More
        <Arrow />
      </CustomizedLink>
    </Container>
  );
};

export default CurrentUserCard;
