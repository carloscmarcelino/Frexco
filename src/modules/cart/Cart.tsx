import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { useContext } from 'react';
import { animation } from '../../components/EnterAnimation/EnterAnimation';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { transformScale } from '../../components/TransformScale';
import { ProductContext } from '../../context/AppContext';

import { IoMdTrash } from 'react-icons/io';
import { Product } from '../../types';

type ProductWAmount = {
  amount: number;
} & Product;

export const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  const decrement = (product: ProductWAmount): void => {
    if (product.amount === 0) return;

    const hasDuplicate = cart.find(({ id }: Product) => id === product.id);

    if (hasDuplicate) {
      setCart(
        cart.map((cartFind: Product) =>
          cartFind.id === product.id
            ? { ...hasDuplicate, amount: hasDuplicate.amount - 1 }
            : cartFind,
        ),
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const increment = (product: ProductWAmount): void => {
    const hasDuplicate = cart.find(({ id }: Product) => id === product.id);

    if (hasDuplicate) {
      setCart(
        cart.map((i: Product) =>
          i.id === product.id ? { ...hasDuplicate, amount: hasDuplicate.amount + 1 } : i,
        ),
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const removeItem = (product: ProductWAmount): void => {
    const cartRemove = cart.filter(({ name }: Product) => name !== product.name);

    setCart(cartRemove);
  };

  const clearCart = (): void => {
    setCart([]);
  };

  const total = (): string => {
    const cartMap = cart.map(({ preco, amount }: { preco: string; amount: number }) => {
      const priceClean = Number(preco.replace('R$: ', '').replace(',', '.'));

      return priceClean * amount;
    });

    const calc = cartMap.reduce((acc: number, curr: number) => acc + curr);

    return `R$ ${calc.toFixed(2)}`;
  };

  const products = (): number => {
    return cart.length;
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

          {cart.length === 0 && <Text fontSize="1.2rem">Seu carrinho está vazio.</Text>}

          {cart.length > 0 && (
            <>
              {cart.map((item: ProductWAmount, index: number) => {
                const { amount, name, preco } = item;

                return (
                  <Flex
                    key={index}
                    mt={isMobile ? '2rem' : index > 0 ? '1rem' : ''}
                    boxShadow="0 6px 12px rgba(30, 60, 90, 0.2)"
                    bg="white"
                    w="80%"
                    alignItems="center"
                    justifyContent="space-around"
                    borderRadius={8}
                    p="20px 50px"
                    direction={isMobile ? 'column' : 'row'}
                    gap={isMobile ? '2rem' : ''}
                  >
                    <Flex>
                      <Text fontWeight="bold" mr="0.5rem" fontSize="1.125rem">
                        Produto:
                      </Text>
                      <Text fontSize="1.125rem" color="purple1" fontWeight="bold">
                        {name}
                      </Text>
                    </Flex>

                    <Flex>
                      <Text fontWeight="bold" mr="0.5rem" fontSize="1.125rem">
                        Preço:
                      </Text>
                      <Text fontSize="1.125rem" color="purple1" fontWeight="bold">
                        {preco}
                      </Text>
                    </Flex>

                    <Flex>
                      <Text fontWeight="bold" mr="0.5rem" fontSize="1.125rem">
                        Quantidade:
                      </Text>
                      <Flex
                        onClick={() => decrement(item)}
                        borderRadius={8}
                        transition=".3s"
                        w="25px"
                        _hover={{
                          backgroundColor: '#ccc',
                        }}
                        bg="#eee"
                        border="none"
                        alignItems="center"
                        justifyContent="center"
                        mr="0.5rem"
                        cursor="pointer"
                      >
                        -
                      </Flex>
                      <Text fontSize="1.125rem" color="purple1" fontWeight="bold">
                        {amount}
                      </Text>
                      <Flex
                        onClick={() => increment(item)}
                        borderRadius={8}
                        transition=".3s"
                        w="25px"
                        _hover={{
                          backgroundColor: '#ccc',
                        }}
                        bg="#eee"
                        border="none"
                        alignItems="center"
                        justifyContent="center"
                        ml="0.5rem"
                        cursor="pointer"
                      >
                        +
                      </Flex>
                    </Flex>

                    <IoMdTrash
                      cursor="pointer"
                      fontSize="1.5rem"
                      onClick={() => removeItem(item)}
                    />
                  </Flex>
                );
              })}

              <Flex flexDirection="column" alignItems="center" mt="2rem" w="60%" mb="3rem">
                <Text color="orange" fontWeight="bold" fontSize="1.6rem" mb="1rem">
                  Finalizar
                </Text>

                <Flex
                  boxShadow="0 6px 12px rgba(30, 60, 90, 0.2)"
                  bg="white"
                  w="100%"
                  alignItems="center"
                  justifyContent="space-around"
                  borderRadius={8}
                  p="20px 50px"
                  direction={isMobile ? 'column' : 'row'}
                  gap={isMobile ? '2rem' : ''}
                >
                  <Flex>
                    <Text fontSize="1.125rem" fontWeight="bold" mr="0.5rem">
                      Total:
                    </Text>
                    <Text color="purple1" fontWeight="bold" fontSize="1.125rem">
                      {total()}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text fontSize="1.125rem" fontWeight="bold" mr="0.5rem">
                      Produtos:
                    </Text>
                    <Text color="purple1" fontWeight="bold" fontSize="1.125rem">
                      {products()}
                    </Text>
                  </Flex>

                  <Button
                    bg="purple1"
                    p="1.5rem"
                    borderRadius={10}
                    sx={transformScale()}
                    _hover={{
                      backgroundColor: 'purple1',
                      boxShadow: '',
                    }}
                    _focus={{
                      outline: 'none',
                    }}
                    _active={{
                      backgroundColor: 'purple1',
                    }}
                    onClick={() => clearCart()}
                  >
                    <Text color="white" fontSize="1.2rem" fontWeight="bold">
                      Limpar
                    </Text>
                  </Button>
                </Flex>
              </Flex>
            </>
          )}
        </Flex>
      </Box>

      <Footer />
    </>
  );
};
