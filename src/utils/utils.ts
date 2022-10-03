import {
  ProductInterface,
  PromotionInterface,
} from "../interfaces/checkout.interface";

export function convertToCurrency(value: number): string {
  if (!value) return "$0";
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(value);
}

export function getUserPromotion(
  username?: string,
  promotions?: PromotionInterface[]
) {
  if (!username) return [];
  return promotions?.filter((promo) => {
    return promo.users.includes(username);
  });
}

export function applyPromoRules(
  cartItems: ProductInterface[],
  promotions?: PromotionInterface[]
) {
  if (!promotions) {
    return cartItems;
  }
  let items = cartItems;
  promotions.forEach((promotion) => {
    items = promotion.rules(items);
  });

  console.log(items);
  return items;
}
