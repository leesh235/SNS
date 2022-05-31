import { useEffect } from "react";
import { LogInRoute } from "./components/routing/LogInRoute";
import { LogOutRoute } from "./components/routing/LogOutRoute";
import { connectSocket, disconnectSocket } from "./utils/socket";

const App = () => {
    const isLogIn = () => {
        return Boolean(localStorage.getItem("token")) || false;
    };

    useEffect(() => {
        connectSocket();
        return () => {
            disconnectSocket();
        };
    }, []);

    return isLogIn() ? <LogInRoute /> : <LogOutRoute />;
};

export default App;
