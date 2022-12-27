import { Box } from '@chakra-ui/react';

type ToastCustomComponentProps = {
  label: string;
};

export const ToastCustomComponent: React.FC<ToastCustomComponentProps> = ({ label }) => {
  return (
    <Box color="white" p={3} bg="blue.500">
      {label}
    </Box>
  );
};
