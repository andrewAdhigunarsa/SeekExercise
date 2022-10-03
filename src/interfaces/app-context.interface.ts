import { UserDetailsInterface } from "./auth.interface";
import React from "react";
import {
  ProductInterface,
  promotionCode,
  PromotionInterface,
} from "./checkout.interface";

export type AppContextProviderType = {
  children: React.ReactNode;
};

export interface PricingRulesInterface {
  products?: ProductInterface[];
  setProducts: React.Dispatch<
    React.SetStateAction<ProductInterface[] | undefined>
  >;
  promotions?: PromotionInterface[];
  setPromotions: React.Dispatch<
    React.SetStateAction<PromotionInterface[] | undefined>
  >;
}

export interface UserInterface {
  userDetails?: UserDetailsInterface;
  setUserDetails: React.Dispatch<
    React.SetStateAction<UserDetailsInterface | undefined>
  >;
}

export interface CheckoutInterface {
  promoCode?: promotionCode;
  setPromoCode: React.Dispatch<React.SetStateAction<promotionCode | undefined>>;
  cartItems?: ProductInterface[];
  setCartItems: React.Dispatch<
    React.SetStateAction<ProductInterface[] | undefined>
  >;
}

export interface AppContextInterface {
  user: UserInterface;
  pricingRules: PricingRulesInterface;
  checkout: CheckoutInterface;
}
