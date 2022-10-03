enum promotionCode {
  THREE4TWOCLASSIC = "threefortwoclassic",
  REDUCEDSTANDOUT = "reducedstandout",
  FIVE4FOURSTANDOUT = 'fiveforfourstandout',
  REDUCEDPREMIUM = 'reducedpremium'
}

interface PromotionInterface {
  promotionId: string;
  promoCode: promotionCode;
  title: string;
  description: string;
  users: string[];
  rules: (selectedProducts: ProductInterface[]) => ProductInterface[];
}

enum productCode {
  classic = "classic",
  standOut = "standOut",
  premium = "premium",
}

interface ProductInterface {
  productCode: productCode;
  name: string;
  description: string;
  retailPrice: number;
}
