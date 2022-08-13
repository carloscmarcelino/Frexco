import { Button, Flex, Text } from '@chakra-ui/react';
import { borderBottomEffect } from '../../../components/BorderBottomEffect';
import { transformScale } from '../../../components/TransformScale';

export const Header = () => {
  return (
    <Flex
      as="header"
      boxShadow="0 2px 4px rgba(30, 60, 90, 0.1)"
      alignItems="center"
      justifyContent="space-around"
      p="2rem 0"
      bg="white"
    >
      <Text fontSize="1.8rem" color="purple1" fontWeight="600" sx={borderBottomEffect}>
        Frexco
      </Text>
      <Button
        bg="purple1"
        p="1.5rem 2rem"
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
      >
        <Text color="white" fontSize="1.2rem" fontWeight="bold">
          Carrinho
        </Text>
      </Button>
    </Flex>
  );
};
