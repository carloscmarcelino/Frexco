export const transformScale = (scale: string = '1.1') => {
  return {
    '&:hover': {
      transform: `scale(${scale})`,
      backgroundColor: '${colors.purple2}',
    },
  };
};
