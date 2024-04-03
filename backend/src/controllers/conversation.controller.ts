/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, Response, Request } from "express";
import Conversation from "../models/Conversation";
import createHttpError from "http-errors";

export const getConversations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const singleConv = await Conversation.find(
      req.token.isSeller
        ? { sellerId: req.token.id }
        : { buyerId: req.token.id }
    ).sort({ updatedAt: -1 });
    res.status(200).send(singleConv);
  } catch (error) {
    next(error);
  }
};

export const createConversations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newConversation = new Conversation({
    id: req.token.isSeller
      ? req.token.id + req.body.to
      : req.body.to + req.token.id,
    buyerId: req.token.isSeller ? req.body.to : req.token.id,
    sellerId: req.token.isSeller ? req.token.id : req.body.to,
    readByBuyer: !req.token.isSeller,
    readBySeller: req.token.isSeller,
  });
  try {
    const savedConv = await newConversation.save();
    res.status(201).send(savedConv);
  } catch (error) {
    next(error);
  }
};

export const SingleConversation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const convers = await Conversation.findOne({ id: req.params.id });
    if (!convers) throw createHttpError(404, "Not found");
    res.status(200).send(convers);
  } catch (error) {
    next(error);
  }
};

export const UpdateConversations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedConv = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          ...(req.token.isSeller
            ? { readBySeller: true }
            : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    res.status(200).send(updatedConv);
  } catch (error) {
    next(error);
  }
};
