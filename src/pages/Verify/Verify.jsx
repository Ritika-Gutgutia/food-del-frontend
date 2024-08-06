/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    const response = await axios.post(
      url + "/api/order/verify",
      {
        success,
        orderId,
      },
      { headers: { token } }
    );

    console.log(response.data, "Verify debugging");
    if (response.data.success === "true") {
      console.log("PAYMENT DONE");
      navigate("/myorders");
    } else {
      navigate("/");
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
