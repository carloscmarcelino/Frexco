import axios from 'axios';

const url = 'https://api-frexco.herokuapp.com';

export const getProducts = (product: string): Promise<any> => {
  return axios.get(`${url}/${product}`);
};
