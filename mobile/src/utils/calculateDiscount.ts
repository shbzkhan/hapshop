export const calculateDiscount = (
  originalPrice: number,
  sellingPrice: number
): number => {
  if (originalPrice <= 0) return 0;

  return Math.round(
    ((originalPrice - sellingPrice) / originalPrice) * 100
  );
};