import axios from 'axios';

const url = 'https://api-frexco.herokuapp.com';

export const getProducts = (config): Promise<any> => {
  return axios.get(url, config);
};
