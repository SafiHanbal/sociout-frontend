import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const UsersBoxContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 5px;
  overflow: scroll;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const CustomizedForm = styled(Form)`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: 38px;
  grid-gap: 10px;
`;
