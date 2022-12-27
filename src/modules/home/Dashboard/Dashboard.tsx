import { Box, Flex } from '@chakra-ui/react';
import { Search } from './components';
import { useForm } from 'react-hook-form';
import { ProductItem } from './components/ProductItem';
import { useEffect, useState } from 'react';
import { Product, products } from '../../../api/mock-products';
import { Loading } from '../../../components/Loading/Loading';
import { useProductContext } from '../../../context';

export type ProductProps = {
  product: string;
};

export const Dashboard = () => {
  const { productContext, setProductContext } = useProductContext();

  const [isLoading, setIsLoading] = useState(true);
  const [searchProduct, setSearchProduct] = useState<string>('');

  const { register, handleSubmit } = useForm<ProductProps>({
    defaultValues: { product: '' },
  });

  const handleSearch = ({ product }: ProductProps) => {
    const toUpper = product !== '' && product[0].toUpperCase() + product.substring(1);
    setSearchProduct(toUpper ? toUpper : '');

    setProductContext?.(toUpper as string);
  };

  useEffect(() => {
    setSearchProduct(productContext as string);
  }, [productContext]);

  const filteredProduct = products.filter(({ name }) => name === searchProduct)[0];

  setTimeout(() => setIsLoading(false), 500);

  if (isLoading) return <Loading height="79.4vh" />;

  return (
    <Box minHeight="72.5vh">
      <Search register={register} handleSubmit={handleSubmit} handleSearch={handleSearch} />

      {filteredProduct ? (
        <Flex alignItems="start" justifyContent="center" mb="2rem">
          <ProductItem
            image={filteredProduct.image}
            preco={filteredProduct.preco}
            name={filteredProduct.name}
          />
        </Flex>
      ) : (
        <Flex alignItems="start" justifyContent="center" wrap="wrap" mb="2rem">
          {products?.map(({ image, preco, name }: Product, index: number) => {
            return <ProductItem key={index} image={image} preco={preco} name={name} />;
          })}
        </Flex>
      )}
    </Box>
  );
};
