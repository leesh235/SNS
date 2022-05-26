import mongoose from "mongoose";

const { MONGODB_URL, DB_NAME } = process.env;

export default mongoose
    .connect(`${MONGODB_URL}`, { dbName: `${DB_NAME}` })
    .then(() => console.log("connect mongodb"))
    .catch((err) => {
        console.log(err);
    });
