import { Flex, Text } from '@chakra-ui/react';
import { IoMdTrash } from 'react-icons/io';
import { Product } from '../../../../api/mock-products';

type CartBoxProps = {
  isMobile: boolean;
  index: number;
  product: Product;
  decrementItem: (product: Product) => void;
  incrementItem: (product: Product) => void;
  removeItem: (product: Product) => void;
};

export const CartBox: React.FC<CartBoxProps> = ({
  isMobile,
  index,
  product,
  decrementItem,
  incrementItem,
  removeItem,
}) => {
  const { amount, name, preco } = product;

  return (
    <Flex
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
          onClick={() => decrementItem(product)}
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
          onClick={() => incrementItem(product)}
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

      <IoMdTrash cursor="pointer" fontSize="1.5rem" onClick={() => removeItem(product)} />
    </Flex>
  );
};
