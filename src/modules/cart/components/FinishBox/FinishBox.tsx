import { Button, Flex, Text } from '@chakra-ui/react';
import { transformScale } from '../../../../components/TransformScale';

type FinishBoxProps = {
  isMobile: boolean;
  total: () => string;
  products: () => number;
  clearCart: () => void;
};

export const FinishBox = ({ isMobile, total, products, clearCart }) => {
  return (
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
  );
};
