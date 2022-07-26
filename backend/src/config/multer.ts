import multer from "multer";
import { User } from "../entity/User.entity";
import { existFile, mikdirPosts } from "../utils/fileFunction";
import { save_file } from "../services/post.service";
import path from "path";

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
    filename: async (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        const id = await save_file(req, file.originalname);
        cb(null, id + "_" + basename + ext);
    },
});

export let upload = multer({ storage: storage });
export let postUpload = multer({ storage: postStorage });
