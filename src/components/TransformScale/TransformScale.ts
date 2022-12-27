type transformScaleProps = (scale?: string) => {
  '&:hover': { transform: string; backgroundColor: string };
};

export const transformScale: transformScaleProps = (scale = '1.1') => {
  return {
    '&:hover': {
      transform: `scale(${scale})`,
      backgroundColor: '${colors.purple2}',
    },
  };
};
