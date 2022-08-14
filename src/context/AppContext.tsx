import { createContext, useState } from 'react';

export const ProductContext = createContext<any>({});

export type CartOptions = {
  amount?: number;
  name: string;
  preco: string;
};

export const ProductContextProvider = ({ children }) => {
  const [productContext, setProductContext] = useState();
  const [cart, setCart] = useState<CartOptions[]>([]);

  return (
    <ProductContext.Provider value={{ productContext, setProductContext, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

// const { productContext, setProductContext } = useContext(ProductContext);
