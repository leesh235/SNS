import { LogInRoute } from "./components/routing/LogInRoute";
import { LogOutRoute } from "./components/routing/LogOutRoute";

const App = () => {
    const isLogIn = () => {
        return Boolean(localStorage.getItem("token")) || false;
    };

    return isLogIn() ? <LogInRoute /> : <LogOutRoute />;
};

export default App;
