import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../api';

type UseGetProductsType = {
  queryKey?: string;
  config?: {
    params: any;
  };
};

export const useGetProducts = ({
  queryKey = 'products',
  config = { params: {} },
}: UseGetProductsType) => {
  return useQuery([queryKey], () => getProducts(config));
};
