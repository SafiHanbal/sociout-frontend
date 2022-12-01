import styled, { keyframes, css } from 'styled-components';
import { Heart } from 'react-feather';
import { rubberBand } from 'react-animations';

const rubberBandAnimation = keyframes`${rubberBand}`;

const circle = (height) => css`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.8);

  width: ${height}px;
  height: ${height}px;
`;

export const Container = styled.div`
  align-self: center;
  justify-self: center;

  display: block;
  cursor: pointer;
  transition: all 0.2s;
  border-right: 1px solid var(--color-gray-light-3);
  width: 50%;
  border-radius: 0 0 0 5px;
  background-color: var(--color-white);

  ${({ variant, height }) => variant === 'circle' && circle(height)}

  &:hover {
    background-color: var(--color-gray-light-1);
  }
`;

export const HeartIcon = styled(Heart)`
  display: block;
  margin: 0 auto;
  height: ${({ height }) => height || 50}px;
  padding: 10px 0;
  animation: ${({ like }) => like && rubberBandAnimation} 1s forwards;
  cursor: pointer;

  fill: ${({ like }) => (like ? 'red' : 'none')};
  stroke: ${({ like }) => (like ? 'red' : 'var(--color-gray-dark-3)')};
`;
