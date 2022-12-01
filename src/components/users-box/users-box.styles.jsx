import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UsersBoxContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 5px;
  overflow: scroll;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);

  position: sticky;
  top: 61px;
  height: calc(100vh - 76px);

  /* width */
  ::-webkit-scrollbar {
    width: 1px;
    height: 0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

export const CustomizedForm = styled(Form)`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 38px;
  grid-gap: 10px;
  padding: 10px;

  position: sticky;
  top: 0px;

  background-color: var(--color-white);
  z-index: 10;
`;

export const UsersList = styled.div`
  position: relative;
  min-height: calc(100% - 58px);
`;

export const CustomizedLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
`;

export const NoUserMessage = styled.p`
  color: var(--color-gray-dark-3);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
