import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../../utils/routes";
import { Header } from "../header/Header";
import Main from "../../pages/Main";
import Start from "../../pages/Start";
import Profile from "../../pages/Profile";

export const LogInRoute = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={`${routes.home}`} element={<Main />} />
        <Route path={`${routes.welcome}`} element={<Start />} />
        <Route path={`${routes.profile}`} element={<Profile />} />
      </Routes>
    </Router>
  );
};
