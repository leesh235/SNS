import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";

const userRepository = dataSource.getRepository(User);

export const getUserInfo = async () => {};
