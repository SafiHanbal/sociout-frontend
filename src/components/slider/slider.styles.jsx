import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const PreviewImage = styled.div`
  height: 450px;
  width: 450px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
