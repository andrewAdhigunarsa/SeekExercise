import { PricingRulesInterface } from "../interfaces/app-context.interface";
import { mockProducts, mockPromotions } from "../configs/pricingRules";
import {
  ProductInterface,
  promotionCode,
  SubmitOrderInterface,
} from "../interfaces/checkout.interface";

export async function getPricingRules(): Promise<
  Partial<PricingRulesInterface>
> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("retrieved pricing rules");
      resolve({
        products: mockProducts,
        promotions: mockPromotions,
      });
    }, 1000);
  });
}

export async function submitOrder(
  username?: string,
  cartItems?: ProductInterface[],
  promoCode?: promotionCode
): Promise<SubmitOrderInterface> {
  return new Promise((resolve, reject) => {
    if (!username) {
      console.log("invalid username");
      reject("invalid username");
    }
    if (!cartItems || cartItems.length < 1) {
      console.log("cart is empty");
      reject("cart is empty");
    }
    setTimeout(() => {
      console.log(`${username} successfully submit order`);
      if (promoCode) {
        if (promoCode in promotionCode) {
          console.log("promocode successfully applied");
        } else {
          console.log("promocode is invalid");
        }
      }
      resolve({
        orderId: "bhp123",
      });
    }, 1000);
  });
}
