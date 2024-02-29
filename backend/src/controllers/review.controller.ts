/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextFunction, RequestHandler, Response, Request } from "express";
import createHttpError from "http-errors";
import Review from "../models/Review";
import Gig from "../models/Gig";

export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.token.isSeller) {
    return next(createHttpError(403, "Sellers cant make reviews"));
  }
  const newReview = new Review({
    userId: req.token.id,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.token.id,
    });

    if (review) return createHttpError(403, "You have already created review");

    const savedReview = newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    res.status(201).send(savedReview);
  } catch (error) {
    next(error);
  }
};

export const getReviews: RequestHandler = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.id });

    res.status(200).send(reviews);
  } catch (error) {
    next(error);
  }
};

export const deleteReview: RequestHandler = async (req, res, next) => {};
