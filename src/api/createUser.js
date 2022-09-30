import axios from 'axios';

export const createUser = async user => {
  const data = JSON.stringify(user);
  const config = {
    headers: {
      Authorization: 'Bearer ',
    },
  };
  const res = await axios.post(
    `${process.env.REACT_APP_API}/api/new_user/`,
    data,
  );

  return res.data.products;
};
