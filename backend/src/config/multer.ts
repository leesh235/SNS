import multer from "multer";
import { User } from "../entity/User.entity";
import { existFile, mikdirPosts } from "../utils/fileFunction";

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

let postStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { email } = req.user as User;
        const { date } = req.body;
        mikdirPosts(req);
        cb(null, `${process.env.POST_PATH}/${email}/${date}`);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

export let upload = multer({ storage: storage });
export let postUpload = multer({ storage: postStorage });
