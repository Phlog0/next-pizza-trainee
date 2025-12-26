export const deliveryPrice = 210;
export function calcTotalAmountWithPercentages(totalAmount: number) {
  const taxesPrice = ((totalAmount / 100) * 5).toFixed(2);
  const totalAmountWithPercentages =
    totalAmount + Number(taxesPrice) + deliveryPrice;
  return { taxesPrice, totalAmountWithPercentages };
}
