import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { animation } from '../../components/EnterAnimation/EnterAnimation';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Product } from '../../api/mock-products';
import { useProductContext } from '../../context';
import { decrement } from './helpers/decrement';
import { increment } from './helpers/increment';
import { CartBox, FinishBox } from './components';

export const Cart = () => {
  const { cart, setCart } = useProductContext();

  const decrementItem = (product: Product) => {
    decrement({
      product,
      cart,
      setCart,
    });
  };

  const incrementItem = (product: Product) => {
    increment({
      product,
      cart,
      setCart,
    });
  };

  const removeItem = (product: Product): void => {
    const cartRemove = cart?.filter(({ name }: Product) => name !== product.name);

    setCart?.(cartRemove ?? []);
  };

  const clearCart = (): void => {
    setCart?.([]);
  };

  const total = (): string => {
    const cartMap = cart?.map(({ preco, amount }: { preco: string; amount?: number }) => {
      const priceClean = Number(preco.replace('R$: ', '').replace(',', '.'));

      return amount ? priceClean * amount : 0;
    });

    const calc = cartMap?.reduce((acc: number, curr: number) => acc + curr);

    return `R$ ${calc?.toFixed(2)}`;
  };

  const products = (): number => {
    return cart?.length ?? 0;
  };

  const [isMobile] = useMediaQuery('(max-width: 1000px)');

  return (
    <>
      <Header />

      <Box minHeight="79.4vh" flexDirection="column" alignItems="center" justifyContent="start">
        <Flex
          minHeight="79.4vh"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
          animation={animation}
        >
          <Text color="orange" fontWeight="bold" fontSize="1.6rem" m="2rem 0 1rem 0">
            Carrinho
          </Text>

          {cart?.length === 0 && <Text fontSize="1.2rem">Seu carrinho está vazio.</Text>}

          {cart && cart?.length > 0 && (
            <>
              {cart?.map((product: Product, index: number) => (
                <CartBox
                  key={index}
                  isMobile={isMobile}
                  index={index}
                  product={product}
                  decrementItem={decrementItem}
                  incrementItem={incrementItem}
                  removeItem={removeItem}
                />
              ))}

              <FinishBox
                isMobile={isMobile}
                total={total}
                products={products}
                clearCart={clearCart}
              />
            </>
          )}
        </Flex>
      </Box>

      <Footer />
    </>
  );
};
