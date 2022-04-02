import express from "express";
const router = express.Router();
import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { exist } from "../config/message";

router.post("/login", async (req, res) => {
  try {
    const user = new User();
    user.email = req.body.email;
    user.password = req.body.password;

    const users = await dataSource.manager.find(User);
    if (users) {
      res.status(200).send("token");
    } else {
      res.status(403).send({ message: `${exist.NOT_EXIST_ACCOUNT}` });
    }
  } catch (error) {
    res.status(500).send({ message: `${error}` });
  }
});

router.post("/join", async (req, res) => {
  try {
    const user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.birth = req.body.birth;
    user.gender = req.body.gender;
    user.nickName = req.body.nickName;

    const users = await dataSource.manager.find(User);
    if (users) {
      res.status(409).send({ message: `${exist.EXIST_ACCOUNT}` });
    } else {
      await dataSource.manager.save(user);
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(500).send({ message: `${error}` });
  }
});

export default router;
