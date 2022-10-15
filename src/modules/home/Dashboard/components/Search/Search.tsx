import { Flex, IconButton, Input, Text } from '@chakra-ui/react';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { ProductProps } from '../../Dashboard';

type SearchProps = {
  register: UseFormRegister<ProductProps>;
  handleSubmit: UseFormHandleSubmit<ProductProps>;
  handleSearch: ({ product }: ProductProps) => void;
};

export const Search: React.FC<SearchProps> = ({ register, handleSubmit, handleSearch }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" m="4rem 0">
      <Text color="purple1" fontWeight="bold" fontSize="1.2rem" mb="1rem">
        Produtos
      </Text>

      <Flex
        as="form"
        onSubmit={handleSubmit(handleSearch)}
        boxShadow="0 4px 8px rgba(30, 60, 90, 0.1)"
      >
        <Input {...register('product')} borderRadius={0} bg="white" fontSize="0.8rem" w="20rem" />

        <IconButton aria-label="search" icon={<AiOutlineSearch />} borderRadius={0} bg="white">
          Pesquisar
        </IconButton>
      </Flex>
    </Flex>
  );
};
