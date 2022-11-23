import styled from 'styled-components';
import { ReactComponent as Loader } from '../../assets/spinner.svg';

const selectColor = (color = 'primary') => {
  if (color === 'primary') return '#3a6b35';
  if (color === 'white') return '#fff';
};

export const LoaderIcon = styled(Loader)`
  height: ${({ size }) => size || 50}px;
  width: ${({ size }) => size || 50}px;

  stroke: ${({ color }) => selectColor(color)};

  ${({ absolute }) =>
    absolute &&
    `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  `} {
  }
`;
