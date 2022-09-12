import { Box, Flex, useToast } from '@chakra-ui/react';
import { Loading } from '../../../components/Loading/Loading';
import { useGetProducts } from '../../../hooks/useGetProducts';
import { Search } from './components';
import { useForm } from 'react-hook-form';
import { ProductItem } from './components/ProductItem';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/AppContext';
import { Product } from '../../../types';

export type ProductProps = {
  product: string;
};

export const Dashboard = () => {
  const { productContext, setProductContext } = useContext(ProductContext);

  const [product, setProduct] = useState<string>('');

  const { register, handleSubmit } = useForm<ProductProps>({
    defaultValues: { product: '' },
  });

  const { data, isLoading, isError } = useGetProducts({
    product,
    config: {
      retry: false,
    },
  });

  const handleSearch = ({ product }: ProductProps) => {
    const toUpper = product !== '' && product[0].toUpperCase() + product.substr(1);
    setProduct(toUpper ? toUpper : '');
    setProductContext(toUpper);
  };

  useEffect(() => {
    setProduct(productContext);
  }, [productContext]);

  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Produto não encontrado.',
        status: 'error',
        isClosable: true,
        duration: 3000,
      });
      setProduct('');
    }
  }, [isError]);

  return (
    <Box minHeight="72.5vh">
      <Search register={register} handleSubmit={handleSubmit} handleSearch={handleSearch} />

      {isLoading && <Loading height="79.4vh" />}

      {!isLoading && !isError && data.data.product && (
        <Flex alignItems="start" justifyContent="center" mb="2rem">
          <ProductItem
            image={data.data.product.image}
            preco={data.data.product.preco}
            name={data.data.product.name}
          />
        </Flex>
      )}

      <Flex alignItems="start" justifyContent="center" wrap="wrap" mb="2rem">
        {!isLoading &&
          !isError &&
          !data.data.product &&
          data.data.map(({ image, preco, name }: Product, index: number) => {
            return <ProductItem key={index} image={image} preco={preco} name={name} />;
          })}
      </Flex>
    </Box>
  );
};
