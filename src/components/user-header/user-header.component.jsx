import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
  ActionConatiner,
  FollowButton,
} from './user-header.styles';

import UserDropdown from '../user-dropdown/user-dropdown.component';
import Loader from '../loader/loader.component';

import { selectFollowUserLoading } from '../../store/other-users/other-users.selector';
import { selectUser } from '../../store/user/user.selector';
import {
  followUserStart,
  unfollowUserStart,
} from '../../store/other-users/other-users.action';

const UserHeader = ({ user }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const followUserLoading = useSelector(selectFollowUserLoading);

  const userId = useParams()._id;
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleFollowUser = () => {
    dispatch(followUserStart(userId));
  };

  const handleUnfollowUser = () => {
    dispatch(unfollowUserStart(userId));
  };

  return (
    <Container>
      <Avatar src={user?.image} alt="User Avatar" />
      <div>
        <Header>
          <Name>{user?.userName}</Name>
          <ActionConatiner>
            {/* Case 1 */}
            {userId && !currentUser?.following.includes(userId) && (
              <FollowButton variant="success" onClick={handleFollowUser}>
                {followUserLoading ? (
                  <Loader size={14} color="white" />
                ) : (
                  'Follow'
                )}
              </FollowButton>
            )}

            {/* Case 2 */}
            {userId && currentUser?.following.includes(userId) && (
              <FollowButton variant="secondary" onClick={handleUnfollowUser}>
                {followUserLoading ? (
                  <Loader size={14} color="white" />
                ) : (
                  'Unfollow'
                )}
              </FollowButton>
            )}

            {/* Case 3 */}
            {!userId && (
              <>
                <Link to="/upload">
                  <AddIcon />
                </Link>
                <MoreContainer>
                  <MoreIcon onClick={handleDropdown} />
                  {dropdownActive && <UserDropdown />}
                </MoreContainer>
              </>
            )}
          </ActionConatiner>
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
