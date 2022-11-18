import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Settings, LogOut } from 'react-feather';

export const Container = styled.div`
  background-color: var(--color-white);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
  width: fit-content;
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
`;

export const CustomizedLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray-dark-1);
  font-size: 16px;
  line-height: 1;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: var(--color-gray-dark-1);
    background-color: var(--color-gray-light-1);
  }
`;

export const SettingsIcon = styled(Settings)`
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;

export const LogoutIcon = styled(LogOut)`
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;
