import {
  NavigationContainer,
  LogoImg,
  LogoContainer,
  LogoText,
} from './navigation.styles';

import LogoSrc from '../../assets/logo.png';

const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <LogoImg src={LogoSrc} alt="Sociout Logo" />
        <LogoText>Sociout</LogoText>
      </LogoContainer>
    </NavigationContainer>
  );
};

export default Navigation;
