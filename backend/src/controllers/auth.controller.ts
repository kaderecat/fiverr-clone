import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

export const register: RequestHandler = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).send("User has been created!");
  } catch (error) {
    res.status(500).send("Something went wrong!");
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
> = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).exec();

    if (!user) return res.status(404).send("User not found!");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) return res.status(400).send("Wrong password or username!");

    const { password, ...info } = user._doc;

    res.status(200).send(info);
  } catch (error) {}
};

export const logout: RequestHandler = async (req, res) => {
  try {
  } catch (error) {}
};
