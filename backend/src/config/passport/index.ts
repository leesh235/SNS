import passport from "passport";
import localStrategy from "./localStrategy";
import jwtStratege from "./jwtStratege";

passport.use("local", localStrategy);
passport.use("jwt", jwtStratege);
passport.initialize();

export const jwt_authenticate = passport.authenticate("jwt", {
    session: false,
});

//loader에서 검증가능, ex) app.use(authenticateJWT)
//Unauthorized를 직접 리턴해줘야함
//req.user === false -> res.send(Unauthorized)
export const authenticateJWT = (req: any, res: any, next: any) => {
    passport.authenticate("jwt", { session: false }, (error, user) => {
        if (user) {
            req.user = user;
        } else {
            req.user = false;
        }
        next();
    })(req, res, next);
};
