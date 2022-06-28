export const logOut = () => {
    window.localStorage.removeItem("token");
    setTimeout(() => {
        window.location.reload();
    }, 50);
};
