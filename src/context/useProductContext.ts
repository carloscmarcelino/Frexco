import { useContext } from 'react';
import { ProductContext } from './AppContext';

type UseProductContext = () => ProductContext;

export const useProductContext: UseProductContext = () => {
  const { productContext, setProductContext, cart, setCart } = useContext(ProductContext);

  return {
    productContext,
    setProductContext,
    cart,
    setCart,
  };
};
