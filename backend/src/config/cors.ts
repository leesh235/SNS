import cors from "cors";

export const corsOptions: cors.CorsOptions = {
    methods: "GET, PATCH, POST, DELETE",
    credentials: true,
    origin: [`${process.env.FE_URL}`],
};
