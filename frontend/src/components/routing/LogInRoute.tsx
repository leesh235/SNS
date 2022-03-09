import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../../utils/routes";
import Main from "../../pages/Main";

export const LogInRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path={`${routes.home}`} element={<Main />} />
            </Routes>
        </Router>
    );
};
