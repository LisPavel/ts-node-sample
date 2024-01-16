interface Props {
  price: number;
  discount: number;
  isInstallment?: boolean;
  months?: number;
}

const totalPrice = ({ price, discount, isInstallment, months }: Props) => {
  let totalPrice: number;
  if (isInstallment) {
    totalPrice = (price * (1 - discount / 100)) / (months as number);
  } else {
    totalPrice = price * (1 - discount / 100);
  }

  return totalPrice;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
