import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  AddIcon,
  Avatar,
  Bio,
  Container,
  MoreIcon,
  Name,
  Header,
  StatsContainer,
  StatsHeading,
  StatsText,
  MoreContainer,
} from './user-header.styles';

import { selectUser } from '../../store/user/user.selector';
import UserDropdown from '../user-dropdown/user-dropdown.component';

const UserHeader = () => {
  const user = useSelector(selectUser);

  const [dropdownActive, setDropdownActive] = useState(false);

  const handleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <Container>
      <Avatar src={user?.image} alt="User Avatar" />
      <div>
        <Header>
          <Name>{user?.userName}</Name>
          <AddIcon />
          <MoreContainer>
            <MoreIcon onClick={handleDropdown} />
            {dropdownActive && <UserDropdown />}
          </MoreContainer>
        </Header>
        <StatsContainer>
          <div>
            <StatsHeading>Posts</StatsHeading>
            <StatsText>{user?.postCount}</StatsText>
          </div>
          <div>
            <StatsHeading>Followers</StatsHeading>
            <StatsText>{user?.followerCount}</StatsText>
          </div>
          <div>
            <StatsHeading>Following</StatsHeading>
            <StatsText>{user?.following.length}</StatsText>
          </div>
        </StatsContainer>
        <Bio>{user?.bio}</Bio>
      </div>
    </Container>
  );
};

export default UserHeader;
