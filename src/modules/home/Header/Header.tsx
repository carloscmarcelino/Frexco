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
      <Text fontSize="2rem" color="purle1" fontWeight="600" sx={borderBottomEffect}>
        Frexco
      </Text>
      <Button
        bg="purle1"
        p="1.5rem 2rem"
        borderRadius={10}
        sx={transformScale()}
        _hover={{
          backgroundColor: 'purle1',
          boxShadow: '',
        }}
        _focus={{
          outline: 'none',
        }}
        _active={{
          backgroundColor: 'purle1',
        }}
      >
        <Text color="white" fontSize="1.2rem" fontWeight="bold">
          Carrinho
        </Text>
      </Button>
    </Flex>
  );
};
