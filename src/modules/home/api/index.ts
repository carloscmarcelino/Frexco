import axios from 'axios';
import { Products } from './types';

const url = 'https://api-frexco.herokuapp.com';

export const getProducts = (config): Promise<Products[]> => {
  return axios.get(url, config);
};
