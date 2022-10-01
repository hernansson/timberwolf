import axios from 'axios';

export const loginUser = async user => {
  const data = JSON.stringify(user);
  const config = {
    headers: {
      Authorization: 'Bearer ',
    },
  };
  const res = await axios.post(`${process.env.REACT_APP_API}/api/login/`, data);

  return res.data;
};
