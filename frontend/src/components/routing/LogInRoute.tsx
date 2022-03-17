import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../../utils/routes";
import { Header } from "../header/Header";
import Main from "../../pages/Main";

export const LogInRoute = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={`${routes.home}`} element={<Main />} />
            </Routes>
        </Router>
    );
};
