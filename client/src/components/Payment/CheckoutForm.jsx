import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tourApi from "../../api/tourApi";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const currentOrder = useSelector((state) => state.tours.orderDetail);
  const currentUserAccessToken = useSelector(
    (state) => state.auth.login.currentUser?.accessToken
  );
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
      redirect: "if_required",
    });
    if (error) {
      setMessage(error.message);
      navigate("/cancel");
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("payment status" + paymentIntent.status);
      await tourApi.createOrder(
        {
          fullName: currentOrder.userInfo.fullName,
          phoneNumber: currentOrder.userInfo.phoneNumber,
          email: currentOrder.userInfo.email,
          address: currentOrder.userInfo.address,
          adultQty: currentOrder.order.orderInfo.adultQuantity,
          childQty: currentOrder.order.orderInfo.childQuantity,
          babyQty: currentOrder.order.orderInfo.babyQuantity,
          paymentInfo: paymentIntent.id,
          tourDepartureDayId: currentOrder.order.toursDetail.id,
          amountPaid: paymentIntent.amount / 100,
        },
        currentUserAccessToken
      );
      navigate("/success");
    } else {
      setMessage("Unexpected state");
      navigate("/cancel");
    }
    setIsProcessing(false);
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isProcessing} id="submit" className="btn btn-primary">
        <span id="button-text">
          {isProcessing ? "Processing ..." : "Pay now"}
        </span>
      </button>
    </form>
  );
};

export default CheckoutForm;
