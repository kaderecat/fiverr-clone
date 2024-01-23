import express from "express";
import userRouter from "../src/routes/user.route";

const app = express();

app.use('/api/users' , userRouter)

export default app;
