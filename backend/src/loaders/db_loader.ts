import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";

export default dataSource
    .initialize()
    .then(async () => {
        console.log("Inserting a new user into the database...");
        const user = new User();
        user.email = "test";
        user.password = "test1234";
        await dataSource.manager.save(user);
        console.log("Saved a new user with id: " + user.id);

        console.log("Loading users from the database...");
        const users = await dataSource.manager.find(User);
        console.log("Loaded users: ", users);

        console.log(
            "Here you can setup and run express / fastify / any other framework."
        );
    })
    .catch((error) => console.log(error));
