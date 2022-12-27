import { Flex, useMediaQuery, useToast } from '@chakra-ui/react';
import { Navigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading/Loading';
import { useState } from 'react';
import { Product, products } from '../../api/mock-products';
import { ToastCustomComponent } from '../../components/ToastCustomComponent';
import { useProductContext } from '../../context';
import { ProductInfoBox } from './components';

export const ProductInfo = () => {
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  if (params.id === '') return <Navigate to="/" />;

  const filteredProduct = products.filter(({ name }) => name === params.id)[0];

  if (!filteredProduct) return <Navigate to="/" />;

  const { image, name, nutritions, preco, id } = filteredProduct;

  const { cart, setCart } = useProductContext();

  const toast = useToast();

  const addToCart = () => {
    const hasDuplicate = cart?.find((cartItem: Product) => cartItem.id === id);

    if (hasDuplicate) {
      setCart?.(
        cart?.map((i: Product) => {
          return i.id === id ? { ...hasDuplicate, amount: hasDuplicate?.amount ?? 0 + 1 } : i;
        }) ?? [],
      );
    } else {
      setCart?.([...(cart ?? []), { ...filteredProduct, amount: 1 }]);
    }

    toast({
      render: () => <ToastCustomComponent label="Produto adicionado no carrinho com sucesso." />,
      duration: 1500,
    });
  };

  const [isMobile] = useMediaQuery('(max-width: 1000px)');
  const [isSmall] = useMediaQuery('(max-width: 500px)');

  setTimeout(() => setIsLoading(false), 500);

  if (isLoading) return <Loading hasHeader hasFooter height="79.4vh" />;

  return (
    <>
      <Header />

      <Flex minHeight="79.4vh" alignItems="center" justifyContent="center">
        {filteredProduct && (
          <ProductInfoBox
            isMobile={isMobile}
            isSmall={isSmall}
            image={image}
            name={name}
            nutritions={nutritions}
            preco={preco}
            addToCart={addToCart}
          />
        )}
      </Flex>

      <Footer />
    </>
  );
};
