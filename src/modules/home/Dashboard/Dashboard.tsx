import { Products } from '../api/types';
import { useGetProducts } from '../hooks/useGetProducts';

export const Dashboard = () => {
  const { data, isLoading } = useGetProducts({});

  !isLoading && console.log(data);

  return <div>Dashboard</div>;
};
