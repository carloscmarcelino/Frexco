import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { animation } from '../../../components/EnterAnimation/EnterAnimation';
import { Loading } from '../../../components/Loading/Loading';
import { transformScale } from '../../../components/TransformScale';
import { useGetProducts } from '../hooks/useGetProducts';

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

export const Dashboard = () => {
  const { data, isLoading } = useGetProducts({});

  return (
    <Box minHeight="79.4vh">
      {isLoading && <Loading height="79.4vh" />}

      <Flex alignItems="start" justifyContent="center" wrap="wrap">
        {!isLoading &&
          data.data.map(({ image, preco, name }: Products, index: number) => {
            return (
              <Flex
                key={index}
                flexDirection="column"
                p="1rem"
                borderRadius={10}
                m="1rem"
                boxShadow="0 6px 12px rgba(30, 60, 90, 0.2)"
                bg="white"
                sx={transformScale('1.05')}
                transition=".2s"
                animation={animation}
              >
                <Image src={image.src} alt={image.alt} w="380px" h="544px" borderRadius={5} />

                <Flex direction="column" m="0.5rem 0">
                  <Text fontWeight="bold" fontSize="1.25rem">
                    {preco}
                  </Text>

                  <Text color="orange" fontWeight="bold" fontSize="1.5rem">
                    {name}
                  </Text>

                  <Button
                    alignSelf="start"
                    bg="purle1"
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
                    <Text color="white" fontWeight="bold" fontSize="1.25rem">
                      Informações nutricionais
                    </Text>
                  </Button>
                </Flex>
              </Flex>
            );
          })}
      </Flex>
    </Box>
  );
};
