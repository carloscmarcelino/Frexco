import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { animation } from '../../../../../components/EnterAnimation/EnterAnimation';
import { transformScale } from '../../../../../components/TransformScale';

type ProductItemProps = {
  image: {
    src: string;
    alt: string;
  };
  preco: string;
  name: string;
};

export const ProductItem: React.FC<ProductItemProps> = ({ image, preco, name }) => {
  const navigate = useNavigate();

  return (
    <Flex
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
          bg="purple1"
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
          onClick={() => navigate(`/${name}`)}
        >
          <Text color="white" fontWeight="bold" fontSize="1.25rem">
            Informações nutricionais
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
