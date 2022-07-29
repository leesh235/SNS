import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../../utils/routes";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Forget from "../../pages/Forget";
import { LogInFooter } from "../common/footer/LogInFooter";

export const LogOutRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path={`${routes.home}`} element={<Home />} />
                <Route path={`${routes.login}`} element={<Login />} />
                <Route path={`${routes.forget}`} element={<Forget />} />
                <Route path={`${routes.signup}`} element={<SignUp />} />
            </Routes>
            <LogInFooter />
        </Router>
    );
};
