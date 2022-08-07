import { extendTheme } from '@chakra-ui/react';
import { Colors } from './types';

const colors: Colors = {
  orange: '#e80',
  purle1: '#87f',
  purle2: '#76f',
  white: '#fff',
};

export const theme = extendTheme({ colors });
