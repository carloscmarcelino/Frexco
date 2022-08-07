import { extendTheme } from '@chakra-ui/react';
import { Colors, FontWeight, FontSize, LineHeight } from './types';

const colors: Colors = {
  orange: '#e80',
  purle1: '#87f',
  purle2: '#76f',
  white: '#fff',
};

const fontWeight: FontWeight = {
  regular: 400,
  bold: 600,
};

const fontSize: FontSize = {
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
};

const lineHeight: LineHeight = {
  sm: 1 * 1.5 + 'rem',
  md: 1.25 * 1.5 + 'rem',
  lg: 1.5 * 1.5 + 'rem',
};

export const theme = extendTheme({ colors, fontWeight, fontSize, lineHeight });
