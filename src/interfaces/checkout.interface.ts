export enum promotionCode {
  THREE4TWOCLASSIC = "threefortwoclassic",
  REDUCEDSTANDOUT = "reducedstandout",
  FIVE4FOURSTANDOUT = "fiveforfourstandout",
  REDUCEDPREMIUM = "reducedpremium",
}

export interface PromotionInterface {
  promotionId: string;
  promoCode: promotionCode;
  title: string;
  description: string;
  users: string[];
  rules: (selectedProducts: ProductInterface[]) => ProductInterface[];
}

export enum productCode {
  classic = "classic",
  standOut = "standOut",
  premium = "premium",
}

export interface ProductInterface {
  productCode: productCode;
  name: string;
  description: string;
  retailPrice: number;
}

export interface SubmitOrderInterface {
  orderId?: string;
}