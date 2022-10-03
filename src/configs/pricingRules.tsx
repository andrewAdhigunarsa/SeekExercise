
export const mockPromotions: PromotionInterface[] = [
  {
    promotionId: '1',
    promoCode: promotionCode.THREE4TWOCLASSIC,
    title: 'Gets a 3 for 2 deal on Classic Ads',
    description: 'Gets a 3 for 2 deal on Classic Ads',
    users: ['secondbite','a'],
    rules: (selectedProducts: ProductInterface[]) => {
      return selectedProducts.map((product, index)=>{
        if((index%3===0) && product.productCode === productCode.classic){
          return {
            ...product,
            retailPrice: 0
          }
        }
        return product
      })
    }
  },
  {
    promotionId: '2',
    promoCode: promotionCode.REDUCEDSTANDOUT,
    title: 'Gets a discount on Stand out Ads where the price drops to $299.99 per ad',
    description: 'Gets a discount on Stand out Ads where the price drops to $299.99 per ad',
    users: ['axil','asdf'],
    rules: (selectedProducts: ProductInterface[]) => {
      return selectedProducts.map((product, index)=>{
        if(product.productCode === productCode.standOut){
          return {
            ...product,
            retailPrice: 299.99
          }
        }
        return product
      })
    }
  },
];

export const defaultPricingRules = {

};
