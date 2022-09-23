import axios from 'axios';

export const createUser = async data => {
  return await axios.post('https://nft-postobon.fly.dev/save_form', data);
};
