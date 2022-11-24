import UsersBox from '../../components/users-box/users-box.component';
import PostBox from '../../components/post-box/post-box.component';
import CurrentUserCard from '../../components/current-user-card/current-user-card.component';

import { Main } from './home.styles';

const Home = () => {
  return (
    <Main>
      <UsersBox />
      <PostBox />
      <CurrentUserCard />
    </Main>
  );
};

export default Home;
