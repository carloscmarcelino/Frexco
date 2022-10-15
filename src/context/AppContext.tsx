import { createContext, useState } from 'react';
import { Product } from '../types';

export const ProductContext = createContext<any>({});

export const ProductContextProvider = ({ children }) => {
  const [productContext, setProductContext] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ productContext, setProductContext, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

// const { productContext, setProductContext } = useContext(ProductContext);
