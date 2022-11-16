import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70vw;
  min-height: 70vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px rgba(var(--color-black-rgb), 0.3);
`;

export const AnimationContainer = styled.div`
  background-color: var(--color-primary);
  padding: 10px 20px;
  background-position: center;
  height: 70vh;
`;
