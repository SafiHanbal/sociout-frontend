import styled, { keyframes } from 'styled-components';
import { Heart, MessageSquare } from 'react-feather';
import { rubberBand } from 'react-animations';

const rubberBandAnimation = keyframes`${rubberBand}`;

export const Container = styled.div`
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
  overflow: hidden;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, 20px);
  grid-column-gap: 10px;
  padding: 7px 10px;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;

  grid-column: 1/2;
  grid-row: 1/-1;
`;

export const Name = styled.p`
  font-size: 16px;
  grid-column: 2/3;
  grid-row: 1/2;
`;

export const Time = styled.p`
  font-size: 14px;
  color: var(--color-gray-dark-3);
`;

export const Caption = styled.p`
  padding: 10px 15px 5px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--color-gray-dark-3);
`;

export const ReactionsCount = styled.p`
  padding: 5px 15px;
  font-size: 12px;
  line-height: 1.3;
  color: var(--color-gray-dark-3);
`;

export const ReactionsContainer = styled.div`
  border: 1px solid var(--color-gray-light-3);
  border-radius: 0 0 5px 5px;
  display: flex;
  align-items: center;
`;

export const LikeContainer = styled.div`
  align-self: center;
  justify-self: center;

  display: block;
  width: 50%;
  cursor: pointer;
  transition: all 0.2s;
  border-right: 1px solid var(--color-gray-light-3);
  border-radius: 0 0 0 5px;

  &:hover {
    background-color: var(--color-gray-light-1);
  }
`;

export const LikeIcon = styled(Heart)`
  display: block;
  margin: 0 auto;
  height: 40px;
  padding: 10px 0;
  animation: ${({ like }) => like && rubberBandAnimation} 1s forwards;

  fill: ${({ like }) => (like ? 'red' : 'none')};
  stroke: ${({ like }) => (like ? 'red' : 'var(--color-gray-dark-3)')};
`;

export const CommentIcon = styled(MessageSquare)`
  align-self: center;
  justify-self: center;

  display: block;
  width: 50%;
  height: 40px;
  padding: 10px 0;
  stroke: var(--color-gray-dark-3);
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0 0 5px 0;

  &:hover {
    background-color: var(--color-gray-light-1);
  }
`;
