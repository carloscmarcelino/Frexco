import { Box, Flex, useToast } from '@chakra-ui/react';
import { Loading } from '../../../components/Loading/Loading';
import { useGetProducts } from '../../../hooks/useGetProducts';
import { Search } from './components';
import { useForm } from 'react-hook-form';
import { ProductItem } from './components/ProductItem';
import { useEffect, useState } from 'react';

type Products = {
  family: string;
  genus: string;
  id: number;
  image: {
    alt: string;
    src: string;
  };
  name: string;
  nutritions: {
    calories: number;
    carbohydrates: number;
    fat: number;
    protein: number;
    sugar: number;
  };
  order: string;
  preco: string;
};

export type ProductProps = {
  product: string;
};

export const Dashboard = () => {
  const [product, setProduct] = useState<string>('');

  const { register, handleSubmit } = useForm<ProductProps>({
    defaultValues: { product: '' },
  });

  const { data, isLoading, isError } = useGetProducts({
    product,
  });

  const handleSearch = ({ product }: ProductProps) => {
    const toUpper = product !== '' && product[0].toUpperCase() + product.substr(1);
    setProduct(toUpper ? toUpper : '');
  };

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
    <Box minHeight="79.4vh">
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
          data.data.map(({ image, preco, name }: Products, index: number) => {
            return <ProductItem key={index} image={image} preco={preco} name={name} />;
          })}
      </Flex>
    </Box>
  );
};
