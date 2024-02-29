import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Succes = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);

  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeReq = async () => {
      try {
        await newRequest.put(`orders/`, { payment_intent });

        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    };
    makeReq();
  }, []);

  return (
    <div>
      You are being redirected to the orders page.Please do not close the page.
    </div>
  );
};

export default Succes;
