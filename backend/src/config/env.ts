import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(
        process.cwd(),
        process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.prod"
    ),
});
