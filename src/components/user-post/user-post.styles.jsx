import styled from 'styled-components';
import { Heart, MessageSquare } from 'react-feather';

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  height: 192px;
  width: 192px;
`;

export const ReactionCounter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(var(--color-black-rgb), 0);
  height: 192px;
  width: 192px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(var(--color-black-rgb), 0.85);
  }

  &:hover ${ReactionCounter} {
    opacity: 1;
  }
`;

export const ReactionText = styled.p`
  color: var(--color-white);
  font-size: 14px;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const LikeIcon = styled(Heart)`
  stroke: var(--color-white);
  margin-right: 3px;
`;

export const CommentIcon = styled(MessageSquare)`
  stroke: var(--color-white);
  margin-right: 3px;
`;
