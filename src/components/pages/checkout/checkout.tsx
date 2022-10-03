import React, { useContext } from "react";
import { Box } from "@mui/material";
import { submitOrder } from "../../../services/pricingRulesServices";
import { AppContext } from "../../../context/app-context";

export default function Checkout() {
  const { user, pricingRules, checkout } = useContext(AppContext);
  const { userDetails } = user;
  const {} = pricingRules;
  const { cartItems, setCartItems, promoCode, setPromoCode } = checkout;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await submitOrder(
      userDetails?.username,
      cartItems,
      promoCode
    );
  };
  return (
    <>
      <h2>Checkout</h2>
      <Box component={"form"}></Box>
    </>
  );
}
