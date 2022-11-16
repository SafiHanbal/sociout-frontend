import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Authentication />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
};

export default App;
