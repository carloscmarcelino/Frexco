import { createContext, useState } from 'react';

export const ProductContext = createContext<any>({});

export const ProductContextProvider = ({ children }) => {
  const [productContext, setProductContext] = useState();

  return (
    <ProductContext.Provider value={{ productContext, setProductContext }}>
      {children}
    </ProductContext.Provider>
  );
};

// const { productContext, setProductContext } = useContext(ProductContext);
