import express, { Response, Request, NextFunction } from "express";
import cookieParser from "cookie-parser";
import userRouter from "../src/routes/user.route";
import conversationsRoute from "../src/routes/conversation.route";
import gigsRoute from "../src/routes/gig.route";
import ordersRoute from "../src/routes/order.route";
import messagesRoute from "../src/routes/message.route";
import reviewsRoute from "../src/routes/review.route";
import authRouter from "../src/routes/auth.route";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173 ", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/conversations", conversationsRoute);
app.use("/api/gigs", gigsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/reviews", reviewsRoute);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found!"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorStatus = 500;
  let errorMessage = "unknown error";

  if (isHttpError(error)) {
    errorStatus = error.status;
    errorMessage = error.message;
  }

  res.status(errorStatus).send(errorMessage);
});

export default app;
