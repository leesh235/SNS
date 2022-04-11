import cors from "cors";

export const corsOptions: cors.CorsOptions = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
    ],
    credentials: true,
    methods: "GET, PATCH, POST, DELETE, HEAD",
    origin: process.env.FE_URL,
};
