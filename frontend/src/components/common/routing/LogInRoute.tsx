import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../../../utils/routes";
import { Header } from "../header/Header";
import { ChatRoomList } from "../../chat/ChatRoomList";
import Main from "../../../pages/Main";
import Start from "../../../pages/Start";
import Profile from "../../../pages/Profile";
import Detail from "../../../pages/Detail";
import Friends from "../../../pages/Friends";
import Search from "../../../pages/Search";
import Bookmark from "../../../pages/Bookmark";
import LikePage from "../../../pages/Like";
import UserDetail from "../../../pages/UserDetail";

export const LogInRoute = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={`${routes.home}`} element={<Main />} />
                <Route path={`${routes.like}`} element={<LikePage />} />
                <Route path={`${routes.bookmark}`} element={<Bookmark />} />
                <Route path={`${routes.welcome}`} element={<Start />} />
                <Route path={`${routes.detail}:postId`} element={<Detail />} />
                <Route path={`${routes.profile}`} element={<Profile />} />
                <Route
                    path={`${routes.userInfo}:email`}
                    element={<UserDetail />}
                />
                <Route path={`${routes.friends}`} element={<Friends />} />
                <Route path={`${routes.search}`} element={<Search />} />
                <Route path={`${routes.like}`} element={<Main />} />
            </Routes>
            <ChatRoomList />
        </Router>
    );
};
