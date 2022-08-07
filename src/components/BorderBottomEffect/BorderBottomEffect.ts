export const borderBottomEffect = {
  transition: '.3s',
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
  },
  '&::after': {
    content: `""`,
    position: 'absolute',
    backgroundColor: 'purle1',
    height: '3px',
    width: '0',
    left: '0',
    bottom: '-5px',
    transition: '0.3s',
  },
  '&:hover::after': {
    width: '100%',
  },
};
