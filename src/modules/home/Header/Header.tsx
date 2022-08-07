import { Button, Flex, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      as="header"
      boxShadow="0 2px 4px rgba(30, 60, 90, 0.1)"
      alignItems="center"
      justifyContent="space-around"
      p="2rem 0"
    >
      <Text fontSize="2rem" color="purle1" fontWeight="600">
        Frexco
      </Text>
      <Button>Carrinho</Button>
    </Flex>
  );
};
