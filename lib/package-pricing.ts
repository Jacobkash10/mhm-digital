export const PRICE_DISCOUNT = 241;
export const DIGITAL_MARKETING_PRICE_CUT = 430;
export const ANIMATION_STARTER_PRICE_CUT = 400;
export const ANIMATION_ULTIMATE_PRICE_CUT = 1000;

export type PackagePriceInput = {
  serviceName: string;
  name: string;
  price: number | null;
  priceByMonth: number | null;
  priceByYear: number | null;
};

export function discounted(price: number | null): number | null {
  if (price === null) return null;
  return Math.max(0, price - PRICE_DISCOUNT);
}

export function applyCategoryPriceCuts(pkg: PackagePriceInput) {
  let { price, priceByMonth, priceByYear } = pkg;

  if (pkg.serviceName === "Digital Marketing") {
    price = price != null ? Math.max(0, price - DIGITAL_MARKETING_PRICE_CUT) : null;
    priceByMonth =
      priceByMonth != null ? Math.max(0, priceByMonth - DIGITAL_MARKETING_PRICE_CUT) : null;
    priceByYear =
      priceByYear != null ? Math.max(0, priceByYear - DIGITAL_MARKETING_PRICE_CUT) : null;
  }

  if (pkg.serviceName === "Animation (2D & 3D)") {
    if (pkg.name === "Starter" && price != null) {
      price = Math.max(0, price - ANIMATION_STARTER_PRICE_CUT);
    }
    if (pkg.name === "Ultimate" && price != null) {
      price = Math.max(0, price - ANIMATION_ULTIMATE_PRICE_CUT);
    }
  }

  return { price, priceByMonth, priceByYear };
}

export function computeFinalPackagePrices(pkg: PackagePriceInput) {
  const adjusted = applyCategoryPriceCuts(pkg);
  return {
    price: discounted(adjusted.price),
    priceByMonth: discounted(adjusted.priceByMonth),
    priceByYear: discounted(adjusted.priceByYear),
  };
}
