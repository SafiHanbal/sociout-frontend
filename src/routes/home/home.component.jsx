import UsersBox from '../../components/users-box/users-box.component';
import CurrentUserCard from '../../components/current-user-card/current-user-card.component';

import { Main } from './home.styles';

const Home = () => {
  return (
    <Main>
      <UsersBox />
      <div></div>
      <CurrentUserCard />
    </Main>
  );
};

export default Home;
