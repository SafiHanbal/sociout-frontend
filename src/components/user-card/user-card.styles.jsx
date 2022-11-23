import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 10px;

  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-gray-light-1);
  }
`;

export const Avatar = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
`;

export const Name = styled.p`
  align-self: center;
  justify-self: start;
  line-height: 1.2;
  font-size: 14px;
`;
