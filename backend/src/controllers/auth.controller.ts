/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express";
import env from "../utils/envValidate";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import createHttpError from "http-errors";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
}

export const register: RequestHandler<
  unknown,
  unknown,
  RegisterBody,
  unknown
> = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      throw createHttpError(400, "Parameters are missing!");
    }

    const existingUsername = await User.findOne({ username: username }).exec();

    if (existingUsername) {
      throw createHttpError(
        400,
        "Username already taken. Please choose a different one or log in instead."
      );
    }

    const existingEmail = await User.findOne({ email: email }).exec();

    if (existingEmail) {
      throw createHttpError(
        409,
        "A user with this email address already exists. Please log in instead."
      );
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send("User has been created!");
  } catch (error) {
    next(error);
  }
};

interface LoginBody {
  username: string;
  password: string;
}

export const login: RequestHandler<
  unknown,
  unknown,
  LoginBody,
  unknown
> = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password) {
      throw createHttpError(400, "Credentials missing");
    }
    const user = await User.findOne({ username: req.body.username }).exec();

    if (!user) {
      throw createHttpError(401, "User not found!");
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) return res.status(400).send("Wrong password or username!");

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      env.JWT_KEY
    );


    const { password, ...info } = user._doc;

    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (error) {
    next(error);
  }
};

export const logout: RequestHandler = async (req, res, next) => {
  try {
    res
      .clearCookie("accessToken", { sameSite: "none", secure: true })
      .status(200)
      .send("User has been logged out!");
  } catch (error) {
    next(error);
  }
};
