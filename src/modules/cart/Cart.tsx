import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { animation } from '../../components/EnterAnimation/EnterAnimation';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { transformScale } from '../../components/TransformScale';
import { CartOptions, ProductContext } from '../../context/AppContext';

import { IoMdTrash } from 'react-icons/io';

export const Cart = () => {
  // const { cart, setCart } = useContext(ProductContext);

  const cart = [
    {
      amount: 1,
      name: 'a',
      preco: 'R$: 1',
    },
    {
      amount: 2,
      name: 'b',
      preco: 'R$: 2',
    },
  ];

  const decrement = (): void => {};

  const increment = (): void => {};

  const removeItem = (): void => {};

  const clearCart = (): void => {};

  const total = (): string => {
    return 'R$ 1,00';
  };

  const products = (): string => {
    return '1';
  };

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
              {cart.map(({ amount, name, preco }: CartOptions, index: number) => {
                return (
                  <Flex
                    key={index}
                    mt={index > 0 ? '1rem' : ''}
                    boxShadow="0 6px 12px rgba(30, 60, 90, 0.2)"
                    bg="white"
                    w="80%"
                    alignItems="center"
                    justifyContent="space-around"
                    borderRadius={8}
                    p="20px 50px"
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
                        onClick={() => decrement()}
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
                      >
                        -
                      </Flex>
                      <Text fontSize="1.125rem" color="purple1" fontWeight="bold">
                        {amount}
                      </Text>
                      <Flex
                        onClick={() => increment()}
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
                      >
                        +
                      </Flex>
                    </Flex>

                    <IoMdTrash fontSize="1.5rem" onClick={() => removeItem()} />
                  </Flex>
                );
              })}

              <Flex flexDirection="column" alignItems="center" mt="2rem" w="60%">
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
