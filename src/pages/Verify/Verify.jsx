/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    console.log("Verify");

    const response = await axios.post(
      url + "/api/order/verify",
      {
        success,
        orderId,
      },
      { headers: { token } }
    );

    console.log("After payment");

    console.log(response.data, "Verify debugging");
    if (success === "true") {
      console.log("PAYMENT DONE");
      navigate("/myorders");
      toast.success("Order placed successfully");
    } else {
      navigate("/");
      console.log("Error in payment");
      toast.error("Error in placing order");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);
  console.log(success, orderId);
  return (
    <div className="verify">
      <div className="verify__spinner"></div>
    </div>
  );
};

export default Verify;
