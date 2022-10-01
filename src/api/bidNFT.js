import axios from 'axios';

export const bidNFT = async bid => {
  const token = JSON.parse(localStorage.getItem('token'));
  bid.token = token;
  const data = JSON.stringify(bid);
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  const res = await axios.post(
    `${process.env.REACT_APP_API}/api/bit_at/`,
    data,
  );

  return res;
};
