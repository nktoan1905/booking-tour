import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51Mc7wLLhkRz3XylPboY5clyOyNgtMGBermBuOmV2qivqMHsjNLDNPre2bdNzF3yaSPzrCUQJmWxaoSOan5DmVr3r00edyVNMWr";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
