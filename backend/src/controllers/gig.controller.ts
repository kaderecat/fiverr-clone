/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RequestHandler } from "express";
import env from "../utils/envValidate";
import jwt from "jsonwebtoken";
import Gig from "../models/Gig";
import createHttpError from "http-errors";

export const createGig: RequestHandler = async (req, res, next) => {
  const token: string = req.cookies.accessToken;

  try {
    if (!token) return res.status(401).send("You are not authenticated!");

    jwt.verify(token, env.JWT_KEY, async (err, payload) => {
      //@ts-ignore
      if (payload.isSeller === true) {
        const newGig = new Gig({
          //@ts-ignore
          userId: payload.id,
          ...req.body,
        });
        const savedGig = await newGig.save();
        return res.status(201).send(savedGig);
      } else {
        return res.status(403).send("Only sellers can create gigs!");
      }
    });
  } catch (error) {
    next(error);
  }
};

export const deleteGig: RequestHandler = async (req, res, next) => {
  const token: string = req.cookies.accessToken;

  try {
    if (!token) return res.status(401).send("You are not authenticated!");

    const gig = await Gig.findById(req.params.id);

    if (!gig) throw createHttpError(401, "Not found!");
    jwt.verify(token, env.JWT_KEY, async (err, payload) => {
      //@ts-ignore

      if (gig.userId !== payload.id) {
        throw createHttpError(403, "You can only delete your gigs!");
      } else {
        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been deleted!");
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getGig: RequestHandler = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (!gig) throw createHttpError(401, "Gig not found!");
    res.status(200).send(gig);
  } catch (error) {
    next(error);
  }
};

export const getGigs: RequestHandler = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
    }),
  };
  try {
    const gigs = await Gig.find(filters);
    res.status(200).send(gigs);
  } catch (error) {
    next(error);
  }
};
