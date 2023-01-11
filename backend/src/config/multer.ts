import multer from "multer";
import path from "path";
import fs from "fs-extra";
import { v4 as uuidv4 } from "uuid";
import { User } from "../entity/user.entity";
import { existFile, mikdirPosts } from "../utils/fileFunction";
import { save_file } from "../services/post.service";

let storages = multer.diskStorage({
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

export let upload = multer({ storage: storages });
export let postUpload = multer({ storage: postStorage });

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const date = new Date();
        const yearDir = `${process.env.FILE_PATH}/${date.getFullYear()}`;
        const fileDir = `${process.env.FILE_PATH}/${date.getFullYear()}/${
            date.getMonth() + 1
        }`;

        if (!fs.existsSync(yearDir)) fs.mkdirSync(yearDir);
        if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir);

        cb(null, fileDir);
    },
    filename: (req, file, cb) => {
        const uuid = uuidv4();
        const ext = path.extname(file.originalname);
        cb(null, `${uuid}.${ext}`);
    },
});

export let uploads = multer({ storage: storage });
