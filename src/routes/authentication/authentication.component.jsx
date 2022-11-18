import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Lottie from 'react-lottie';
import lottieAnimation from '../../assets/authentication-animation.json';

import Login from '../../components/login/login.component';
import SignUp from '../../components/signup/signup.component';

import { selectUser } from '../../store/user/user.selector';

import {
  AnimationContainer,
  AuthenticationContainer,
} from './authentication.styles';

const Authentication = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AuthenticationContainer>
      <AnimationContainer>
        <Lottie options={{ animationData: lottieAnimation }} />
      </AnimationContainer>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AuthenticationContainer>
  );
};

export default Authentication;
