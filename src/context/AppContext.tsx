import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Products } from '../api/mock-products';

export type ProductContext = {
  productContext?: string;
  setProductContext?: Dispatch<SetStateAction<string | undefined>>;
  cart?: Products;
  setCart?: Dispatch<SetStateAction<Products>>;
};

export const ProductContext = createContext<ProductContext>({});

export const ProductContextProvider = ({ children }) => {
  const [productContext, setProductContext] = useState<string>();
  const [cart, setCart] = useState<Products>([]);

  return (
    <ProductContext.Provider value={{ productContext, setProductContext, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
