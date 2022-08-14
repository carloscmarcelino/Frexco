import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../api';

type GetProductsType = {
  product: string;
  config?: {
    retry: boolean;
  };
};

export const useGetProducts = ({ product, config }: GetProductsType) => {
  return useQuery(['Product-', product ?? ''], () => getProducts(product), config);
};
