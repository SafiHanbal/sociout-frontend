import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Directory from './routes/directory/directory.component';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Directory />} />
      <Route path="auth" element={<Authentication />} />
    </Routes>
  );
};

export default App;
