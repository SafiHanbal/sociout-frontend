import { useDispatch } from 'react-redux';

import {
  Container,
  CustomizedLink,
  LogoutIcon,
  SettingsIcon,
} from './user-dropdown.styles';

import { logoutStart } from '../../store/user/user.action';

const UserDropdown = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutStart());
  };

  return (
    <Container>
      <CustomizedLink to="/settings">
        <SettingsIcon /> Settings
      </CustomizedLink>
      <CustomizedLink as="p" onClick={handleLogout}>
        <LogoutIcon /> Logout
      </CustomizedLink>
    </Container>
  );
};

export default UserDropdown;
