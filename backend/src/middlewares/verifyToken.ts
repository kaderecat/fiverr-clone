import { Request, Response, NextFunction } from "express";
import env from "../utils/envValidate";
import jwt from "jsonwebtoken";
import { AccessToken } from "../interfaces/Token";

export const auth = async (req: Request, res: Response, next: NextFunction) => {


  try {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send("You are not authenticated!");

    const decoded = jwt.verify(token, env.JWT_KEY);
    req.token = decoded as AccessToken;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};
