/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheackoutForm";
import "./pay.css";

const stripePromise = loadStripe(
  "pk_test_51OnQnuISAudzcM5Wt3Ejta8mywVkTp6AcYWUMJ0XyVvQO5k14bAfNFuN7VPxcZzmuLtFKHrtAJoAnmxGRHae56t200fiZHI8im"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await newRequest.post(
          `orders/create-payment-intent/${id}`
        );

        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  },[]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="flex flex-col justify-center items-center my-10 ">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
