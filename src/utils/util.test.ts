import {
  productCode,
  ProductInterface,
  promotionCode,
  PromotionInterface,
} from "../interfaces/checkout.interface";
import { applyPromoRules } from "./utils";

it("Should apply the correct promotion", async () => {
  const promotions: PromotionInterface[] = [
    {
      promotionId: "3",
      promoCode: promotionCode.FIVE4FOURSTANDOUT,
      title: "Gets a 5 for 4 deal on Stand out Ads",
      description: "Gets a 5 for 4 deal on Stand out Ads",
      users: ["myer"],
      rules: (selectedProducts: ProductInterface[]) => {
        return selectedProducts.map((product, index) => {
          if (index % 5 === 0 && product.productCode === productCode.standOut) {
            return {
              ...product,
              retailPrice: 0,
            };
          }
          return product;
        });
      },
    },
    {
      promotionId: "4",
      promoCode: promotionCode.REDUCEDPREMIUM,
      title:
        "GGets a discount on Premium Ads where the price drops to $389.99 per ad",
      description:
        "Gets a discount on Premium Ads where the price drops to $389.99 per ad",
      users: ["myer"],
      rules: (selectedProducts: ProductInterface[]) => {
        return selectedProducts.map((product, index) => {
          if (product.productCode === productCode.premium) {
            return {
              ...product,
              retailPrice: 389.99,
            };
          }
          return product;
        });
      },
    },
  ];

  const chartItems: ProductInterface[] = [
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 394.99,
    },
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 394.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.classic,
      name: "Classic Ad",
      description: "Offers the most basic level of advertisement",
      retailPrice: 269.99,
    },
  ];
  const chartAppliedItems: ProductInterface[] = [
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 389.99,
    },
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 389.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.classic,
      name: "Classic Ad",
      description: "Offers the most basic level of advertisement",
      retailPrice: 269.99,
    },
  ];

  expect(applyPromoRules(chartItems, promotions)).toStrictEqual(
    chartAppliedItems
  );
});

it("Should apply the correct promotion - 2", async () => {
  const promotions: PromotionInterface[] = [
    {
      promotionId: "3",
      promoCode: promotionCode.FIVE4FOURSTANDOUT,
      title: "Gets a 5 for 4 deal on Stand out Ads",
      description: "Gets a 5 for 4 deal on Stand out Ads",
      users: ["myer"],
      rules: (selectedProducts: ProductInterface[]) => {
        return selectedProducts.map((product, index) => {
          if (index % 5 === 0 && product.productCode === productCode.standOut) {
            return {
              ...product,
              retailPrice: 0,
            };
          }
          return product;
        });
      },
    },
    {
      promotionId: "4",
      promoCode: promotionCode.REDUCEDPREMIUM,
      title:
        "GGets a discount on Premium Ads where the price drops to $389.99 per ad",
      description:
        "Gets a discount on Premium Ads where the price drops to $389.99 per ad",
      users: ["myer"],
      rules: (selectedProducts: ProductInterface[]) => {
        return selectedProducts.map((product, index) => {
          if (product.productCode === productCode.premium) {
            return {
              ...product,
              retailPrice: 389.99,
            };
          }
          return product;
        });
      },
    },
  ];

  const chartItems: ProductInterface[] = [
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 394.99,
    },
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 394.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.classic,
      name: "Classic Ad",
      description: "Offers the most basic level of advertisement",
      retailPrice: 269.99,
    },
  ];
  const chartAppliedItems: ProductInterface[] = [
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 389.99,
    },
    {
      productCode: productCode.premium,
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      retailPrice: 389.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 0,
    },
    {
      productCode: productCode.standOut,
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      retailPrice: 322.99,
    },
    {
      productCode: productCode.classic,
      name: "Classic Ad",
      description: "Offers the most basic level of advertisement",
      retailPrice: 269.99,
    },
  ];

  expect(applyPromoRules(chartItems, promotions)).toStrictEqual(
    chartAppliedItems
  );
});
