import { Box, Button, Flex, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Nutritions, Product } from '../../../api/mock-products';
import { animation } from '../../../components/EnterAnimation';
import { transformScale } from '../../../components/TransformScale';

type ProductInfoBoxProps = {
  isMobile: boolean;
  isSmall: boolean;
  image: Product['image'];
  name: string;
  nutritions: Nutritions;
  preco: string;
  addToCart: () => void;
};

export const ProductInfoBox: React.FC<ProductInfoBoxProps> = ({
  isMobile,
  isSmall,
  image,
  name,
  nutritions,
  preco,
  addToCart,
}) => {
  return (
    <Flex
      bg="white"
      borderRadius={10}
      boxShadow="0 6px 12px rgba(30, 60, 90, 0.2)"
      p="1rem"
      animation={animation}
      direction={isMobile ? 'column' : 'row'}
      gap={isMobile ? '2rem' : ''}
      w={isSmall ? '95%' : 'auto'}
    >
      <Image src={image.src} alt={image.alt} w={isSmall ? '100%' : '380px'} borderRadius={5} />

      <Box w={isSmall ? '100%' : '380px'} p="1rem">
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
            Essa fruta é muito versátil, podendo ser consumida madura ou verde, e cujas propriedades
            podem variar, principalmente a nível digestivo. Essa fruta pode também ser consumida
            crua ou cozida, inteira ou amassada e utilizada na preparação de pratos doces ou em
            saladas.
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
  );
};
