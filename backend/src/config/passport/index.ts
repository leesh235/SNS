import passport from "passport";
import localStrategy from "./localStrategy";
import jwtStratege from "./jwtStratege";

passport.use("local", localStrategy);
passport.use("jwt", jwtStratege);

export const jwt_authenticate = passport.authenticate("jwt", {
    session: false,
});

export default passport.initialize();
