import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../api';

export const useGetProducts = ({ product }: { product: string }) => {
  return useQuery(['Product', product ?? ''], () => getProducts(product), {
    retry: false,
  });
};
