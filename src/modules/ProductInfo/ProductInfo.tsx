import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Text,
  Toast,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import { Navigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useGetProducts } from '../../hooks/useGetProducts';
import { FaShoppingCart } from 'react-icons/fa';
import { transformScale } from '../../components/TransformScale';
import { animation } from '../../components/EnterAnimation/EnterAnimation';
import { Loading } from '../../components/Loading/Loading';
import { CartOptions, ProductContext } from '../../context/AppContext';
import { useContext } from 'react';

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

export const ProductInfo = () => {
  const params = useParams();

  if (params.id === '') return <Navigate to="/" />;

  const { data, isError, isLoading } = useGetProducts({
    product: params.id ?? '',
    config: {
      retry: false,
    },
  });

  if (isError) return <Navigate to="/" />;

  const { image, name, nutritions, preco }: Products = data ? data.data.product : false;

  const { cart, setCart } = useContext(ProductContext);

  const toast = useToast();

  const addToCart = () => {
    const hasDuplicate = cart.find((product: CartOptions) => product.name === name);

    if (hasDuplicate) {
      setCart(
        cart.map((product: CartOptions) =>
          product.name === name ? { ...hasDuplicate, amount: hasDuplicate.amount + 1 } : product,
        ),
      );
    } else {
      setCart([...cart, { name, preco, amount: 1 }]);
    }

    toast({
      title: 'Produto adicionado no carrinho com sucesso.',
      status: 'success',
      isClosable: true,
      duration: 1500,
    });
  };

  return (
    <>
      <Header />

      <Flex minHeight="79.4vh" alignItems="center" justifyContent="center">
        {isLoading && <Loading />}

        {data && (
          <Flex
            bg="white"
            borderRadius={10}
            boxShadow="0 6px 12px rgba(30, 60, 90, 0.2)"
            p="1rem"
            animation={animation}
          >
            <Image src={image.src} alt={image.alt} w="380px" borderRadius={5} />

            <Box w="380px" p="1rem">
              <Text color="orange" fontSize="1.2rem" fontWeight="bold" mb="0.5rem">
                {name}
              </Text>

              <Box mb="0.5rem">
                <Text fontSize="1rem" fontWeight="regular" mb="0.25rem">
                  A banana é uma fruta tropical rica em carboidratos, vitaminas e minerais que
                  proporcionam diversos benefícios para a saúde, como garantir energia, aumentar a
                  sensação de saciedade e de bem estar.
                </Text>
                <Text fontSize="1rem" fontWeight="regular">
                  Essa fruta é muito versátil, podendo ser consumida madura ou verde, e cujas
                  propriedades podem variar, principalmente a nível digestivo. Essa fruta pode
                  também ser consumida crua ou cozida, inteira ou amassada e utilizada na preparação
                  de pratos doces ou em saladas.
                </Text>
              </Box>

              <UnorderedList mb="0.5rem">
                <ListItem
                  sx={{
                    listStyleType: 'disc',
                  }}
                >
                  <Flex>
                    <Text fontSize="1rem" fontWeight="regular" mr="0.25rem">
                      Calorias:
                    </Text>
                    <Text fontWeight="bold" color="purple1">
                      {nutritions.calories}kcal
                    </Text>
                  </Flex>
                </ListItem>

                <ListItem
                  sx={{
                    listStyleType: 'disc',
                  }}
                >
                  <Flex>
                    <Text fontSize="1rem" fontWeight="regular" mr="0.25rem">
                      Carboidratos:
                    </Text>
                    <Text fontWeight="bold" color="purple1">
                      {nutritions.carbohydrates}g
                    </Text>
                  </Flex>
                </ListItem>

                <ListItem
                  sx={{
                    listStyleType: 'disc',
                  }}
                >
                  <Flex>
                    <Text fontSize="1rem" fontWeight="regular" mr="0.25rem">
                      Gorduras:
                    </Text>
                    <Text fontWeight="bold" color="purple1">
                      {nutritions.fat}g
                    </Text>
                  </Flex>
                </ListItem>

                <ListItem
                  sx={{
                    listStyleType: 'disc',
                  }}
                >
                  <Flex>
                    <Text fontSize="1rem" fontWeight="regular" mr="0.25rem">
                      Proteinas:
                    </Text>
                    <Text fontWeight="bold" color="purple1">
                      {nutritions.protein}g
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem
                  sx={{
                    listStyleType: 'disc',
                  }}
                >
                  <Flex>
                    <Text fontSize="1rem" fontWeight="regular" mr="0.25rem">
                      Açucares:
                    </Text>
                    <Text fontWeight="bold" color="purple1">
                      {nutritions.sugar}g
                    </Text>
                  </Flex>
                </ListItem>
              </UnorderedList>

              <Text color="purple1" fontWeight="bold" fontSize="1.4rem" mb="0.5rem">
                {preco}
              </Text>

              <Button
                onClick={() => addToCart()}
                sx={transformScale('1.05')}
                bg="purple1"
                p="1.4rem 2rem"
                borderRadius={10}
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
              >
                <Text color="white" fontWeight="bold" fontSize="1.2rem" mr="0.5rem">
                  Adicionar
                </Text>
                <FaShoppingCart fontSize="1.2rem" />
              </Button>
            </Box>
          </Flex>
        )}
      </Flex>

      <Footer />
    </>
  );
};
