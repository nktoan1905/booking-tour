import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const res = await axios.post("r", {
          amount: 8000,
          id,
        });
        if (res.data.success) {
          console.log("success payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error.message);
    }
  };

  return <div></div>;
};

export default PaymentForm;
