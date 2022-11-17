import styled from 'styled-components';

export const NavigationContainer = styled.div`
  background-color: var(--color-primary);
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 30px;
`;

export const LogoText = styled.p`
  color: var(--color-white);
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 3px;
  line-height: 1;
  margin-left: 5px;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;
