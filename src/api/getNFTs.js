import axios from 'axios';

export const getNFTs = async id => {
  const data = JSON.stringify({ id_product: id });
  const config = {
    headers: {
      Authorization: 'Bearer ',
    },
  };
  const res = await axios.post(
    `${process.env.REACT_APP_API}/api/products/`,
    data,
  );

  return res.data.products;
};
