/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RequestHandler } from "express";
import User from "../models/User";
import env from "../utils/envValidate";
import jwt from "jsonwebtoken";

export const deleteFn: RequestHandler = async (req, res, next) => {
  const token: string = req.cookies.accessToken;
  try {
    const user = await User.findById(req.params.id);

    if (!token) return res.status(401).send("You are not authenticated!");
//@ts-ignore
    jwt.verify(token, env.JWT_KEY, async (err, payload) => {
      //@ts-ignore
      if (payload.id !== user?._id.toString()) {
        return res.status(403).send("You can delete only your account!");
      }

      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("User deleted!");
    });
  } catch (error) {
    next(error);
  }
};
