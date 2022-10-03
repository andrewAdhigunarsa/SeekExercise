import React, { createContext, useState } from "react";
import {
  AppContextInterface,
  AppContextProviderType,
} from "../interfaces/app-context.interface";
import { UserDetailsInterface } from "../interfaces/auth.interface";
import {
  ProductInterface,
  promotionCode,
  PromotionInterface,
} from "../interfaces/checkout.interface";

export const AppContext = createContext({} as AppContextInterface);

export const AppContextProvider: React.FC<AppContextProviderType> = ({
  children,
}: AppContextProviderType) => {
  // user
  const [userDetails, setUserDetails] = useState<
    UserDetailsInterface | undefined
  >();

  // pricing rules
  const [products, setProducts] = useState<ProductInterface[] | undefined>();
  const [promotions, setPromotions] = useState<
    PromotionInterface[] | undefined
  >();

  // checkout
  const [promoCode, setPromoCode] = useState<promotionCode | undefined>();
  const [cartItems, setCartItems] = useState<ProductInterface[] | undefined>();

  const store: AppContextInterface = {
    user: {
      userDetails,
      setUserDetails,
    },
    pricingRules: {
      products,
      setProducts,
      promotions,
      setPromotions,
    },
    checkout: {
      promoCode,
      setPromoCode,
      cartItems,
      setCartItems,
    },
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
