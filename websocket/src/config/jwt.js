import { verify } from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export const jwt_authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    verify(authorization, `${JWT_SECRET}`, (err, decoded) => {
        if (err) {
            req.user = false;
            return next(new Error(`Authentication error`));
        }
        req.user = decoded;
        return next();
    });
};
