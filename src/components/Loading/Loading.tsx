import styled from 'styled-components';

type LoadingProps = {
  height?: string;
};

export const Loading: React.FC<LoadingProps> = ({ height = 'auto' }) => {
  const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto auto;
    height: ${height};
  `;

  const Circle = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #87f;
    margin: 4px;
    animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    @keyframes dots {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(0, 30px, 0);
      }
    }
  `;

  return (
    <Loading>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
    </Loading>
  );
};
