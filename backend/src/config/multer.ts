import multer from "multer";
import { User } from "../entity/User.entity";

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${process.env.FILE_PATH}`);
    },
    filename: (req, file, cb) => {
        const { email } = req.user as User;
        cb(null, email + "_" + req.body.mode + "_" + file.originalname);
    },
});

export let upload = multer({ storage: storage });
