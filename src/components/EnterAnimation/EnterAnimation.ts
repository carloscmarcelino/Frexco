import { keyframes } from '@emotion/react';

const enter = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const animation = `${enter} 0.3s`;
