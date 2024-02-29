import { NextFunction, RequestHandler, Response, Request } from "express";
import User from "../models/User";

export const deleteFn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.params.id);
    if (req.token.id !== user?._id.toString())
      return res.status(400).send("You can delete only your account!");

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
