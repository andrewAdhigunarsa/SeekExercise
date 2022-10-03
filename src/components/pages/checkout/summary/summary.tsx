import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { CheckoutInterface } from "../../../../interfaces/app-context.interface";
import { PromotionInterface } from "../../../../interfaces/checkout.interface";
import { applyPromoRules, convertToCurrency } from "../../../../utils/utils";

interface Props {
  checkout: CheckoutInterface;
  promotions?: PromotionInterface[];
}

export default function Summary({ checkout, promotions }: Props) {
  const { cartItems } = checkout;
  const appliedCartItems = applyPromoRules(cartItems ?? [], promotions);
  const renderItems = appliedCartItems?.map((item, index) => {
    return (
      <Typography
        key={`${item.productCode}${index}`}
        sx={{ mb: 1.5 }}
        color="text.secondary"
      >
        {item.name} - {convertToCurrency(item.retailPrice)}
      </Typography>
    );
  });
  const total = appliedCartItems
    .map((v) => v.retailPrice)
    .reduce((a, b) => a + b);
  return (
    <Card sx={{ minWidth: 275, textAlign: "left" }}>
      <CardContent>
        <Typography
          variant={"h5"}
          sx={{ mb: 1.5 }}
          color="text.secondary"
          gutterBottom
        >
          Summary
        </Typography>
        {renderItems}
        <Typography sx={{ fontWeight: "bold" }} variant="body2">
          total: {convertToCurrency(total)}
        </Typography>
      </CardContent>
    </Card>
  );
}
