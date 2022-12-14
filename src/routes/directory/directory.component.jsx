import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Routes, Route } from 'react-router-dom';

import Navigation from '../navigation/navigation.component';
import Home from '../home/home.component';
import User from '../user/user.component';
import Settings from '../settings/settings.component';

import { selectUser } from '../../store/user/user.selector';
import Me from '../me/me.component';
import Upload from '../upload/upload.component';

const Directory = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="user/:_id" element={<User />} />
        <Route path="me" element={<Me />} />
        <Route path="settings" element={<Settings />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default Directory;
