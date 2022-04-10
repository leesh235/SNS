import multer from "multer";
import { User } from "../entity/User.entity";
import { existFile } from "../utils/fileFunction";

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { email } = req.user as User;
        existFile(req, file);
        cb(null, `${process.env.FILE_PATH}/${email}`);
    },
    filename: (req, file, cb) => {
        cb(null, req.body.mode + "_" + file.originalname);
    },
});

export let upload = multer({ storage: storage });
