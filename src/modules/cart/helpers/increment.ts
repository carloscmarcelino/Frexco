import { Dispatch, SetStateAction } from 'react';
import { Product, Products } from '../../../api/mock-products';

type Args = {
  product: Product;
  cart?: Products;
  setCart: Dispatch<SetStateAction<Products>> | undefined;
};

type IncrementFn = (args: Args) => void;

export const increment: IncrementFn = ({ product, cart, setCart }): void => {
  const hasDuplicate = cart?.find(({ id }: Product) => id === product.id);

  if (hasDuplicate) {
    setCart?.(
      cart?.map((prev: Product) => {
        if (!hasDuplicate.amount) return prev;

        return prev.id === product.id ? { ...hasDuplicate, amount: hasDuplicate.amount + 1 } : prev;
      }) ?? [],
    );
  } else {
    setCart?.([...(cart ?? []), { ...product, amount: 1 }]);
  }
};
