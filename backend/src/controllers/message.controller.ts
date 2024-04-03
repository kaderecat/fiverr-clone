import { RequestHandler } from "express";
import Message from "../models/Message";
import Conversation from "../models/Conversation";

export const getMessages: RequestHandler = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });

    res.status(201).send(messages);
  } catch (error) {
    next(error);
  }
};
export const sendMesseages: RequestHandler = async (req, res, next) => {
  try {
    const newMessage = new Message({
      conversationId: req.body.conversationId,
      userId: req.token.id,
      desc: req.body.desc,
    });

    const savedMsg = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.token.isSeller,
          readByBuyer: !req.token.isSeller,
          lastMessage: req.body.desc,
        },
      },
      {
        new: true,
      }
    );
    res.status(201).send(savedMsg);
  } catch (error) {
    next(error);
  }
};
