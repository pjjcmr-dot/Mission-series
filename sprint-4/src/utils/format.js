export const priceFormat = (price) => {
  const intl = new Intl.NumberFormat("ko-KR", {
    maximumFractionDigits: 3,
  });
  return intl.format(price);
};
