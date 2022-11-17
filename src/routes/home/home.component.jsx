import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Navigation from '../../components/navigation/navigation.component';
import UsersBox from '../../components/users-box/users-box.component';
import CurrentUserCard from '../../components/current-user-card/current-user-card.component';

import { selectUser } from '../../store/user/user.selector';
import { Main } from './home.styles';

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <>
      <Navigation />
      <Main>
        <UsersBox />
        <div></div>
        <CurrentUserCard />
      </Main>
    </>
  );
};

export default Home;
