import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 7px;
`;

export const Name = styled.h2`
  font-size: 14px;
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 2px;
`;

export const CommentText = styled.p`
  font-size: 14px;
  line-height: 1.3;
  color: var(--color-gray-dark-2);
  padding: 7px 10px;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(var(--color-black-rgb), 0.2);
`;
