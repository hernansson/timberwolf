import axios from 'axios';

const mock = [
  {
    id: 1,
    price: 3500,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 2,
    price: 3500,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 3,
    price: 2000,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 4,
    price: 3500,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 5,
    price: 3544,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 6,
    price: 900,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 7,
    price: 85540,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 8,
    price: 500,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 9,
    price: 500,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
  {
    id: 10,
    price: 500,
    img: 'https://images.wsj.net/im-491398?width=700&height=699',
  },
];
export const getNFTs = async () => {
  return await new Promise(resolve => {
    // wait 3s before calling fn(par)
    setTimeout(() => resolve(mock), 3000);
  });
  //return await axios.get('https://nft-postobon.fly.dev/save_form', data);
};
