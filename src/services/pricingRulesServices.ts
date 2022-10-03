import {
  CredentialsInterface,
  UserTokenInterface,
} from "../interfaces/auth.interface";
import { PricingRulesInterface } from "../interfaces/app-context.interface";

export async function getPricingRules(
  token: UserTokenInterface
): Promise<Partial<PricingRulesInterface>> {
  // TODO: Uncomment and update when required
  // return fetch(API_URL, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //     'Authorization': 'token'
  //   },
  //   body: JSON.stringify(credentials)
  // })
  // .then(data => data.json())

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("login success");
      resolve({
        products: [],
        promotions: [],
      });
    }, 2000);
  });
}

export async function submitOrder(
  username?: string,
  cartItems?: ProductInterface[],
  promoCode?: promotionCode
): Promise<Partial<PricingRulesInterface>> {
  // TODO: Uncomment and update when required
  // return fetch(API_URL, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //     'Authorization': 'token'
  //   },
  //   body: JSON.stringify(credentials)
  // })
  // .then(data => data.json())

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
        products: [],
        promotions: [],
      });
    }, 2000);
  });
}
