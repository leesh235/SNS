export const logOut = () => {
    window.localStorage.removeItem("token");
    setTimeout(() => {
        window.location.replace("/");
    }, 50);
};
