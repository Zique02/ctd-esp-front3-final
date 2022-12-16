export const priceFormatter = (num: number | undefined) => {
  return (
    num &&
    new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(num)
  );
};
