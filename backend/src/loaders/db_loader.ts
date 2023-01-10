import { dataSource } from "../config/typeorm";

export default dataSource
    .initialize()
    .then(async () => {
        console.log("start mysql");
    })
    .catch((error) => console.log(error));
