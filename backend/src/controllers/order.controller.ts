import { NextFunction, Response, Request, RequestHandler } from "express";
import Order from "../models/Order";
import Gig from "../models/Gig";
import Stripe from "stripe";
import env from "../utils/envValidate";

export const intent: RequestHandler = async (req, res) => {
  const stripe = new Stripe(env.STRIPE_KEY);

  const gig = await Gig.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig!.price * 100,
    currency: "bgn",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const order = new Order({
    gigId: gig?._id,
    img: gig?.cover,
    title: gig?.title,
    buyerId: req.token.id,
    sellerId: gig?.userId,
    price: gig?.price,
    payment_intent: paymentIntent.id,
  });

  await order.save();

  res.status(200).send({ clientSecret: paymentIntent.client_secret });
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Order.find({
      ...(req.token.isSeller
        ? { sellerId: req.token.id }
        : { buyerId: req.token.id }),
      isCompleted: false,
    });

    console.log(orders);

    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
};

export const confirmFn: RequestHandler = async (req, res, next) => {
  try {
    await Order.findOneAndUpdate(
      { payment_intent: req.body.payment_intent },
      { $set: { isCompleted: true } }
    );

    res.status(200).send("Order confirmed!");
  } catch (error) {
    next(error);
  }
};
