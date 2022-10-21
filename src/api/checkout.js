import axios from 'axios';

export const checkout = async user => {
  const temp = {
    factura: 'djklfjasd',
    usuario: 'ng229a29856zzom5',
    valor: 9000,
    descripcionFactura: 'hola',
  };

  const config = {
    headers: {
      Authorization: 'Bearer ',
    },
  };
  const res = await axios.post(
    `https://gateway2.tucompra.com.co/tc/app/inputs/compra.jsp`,
    temp,
  );

  /*const res = await axios.post(
    `https://demover3-1.tucompra.net/tc/app/inputs/compra.jsp`,
    {
      action: 'https://demover3-1.tucompra.net/tc/app/inputs/compra.jsp',
      data: temp,
    },
  );*/

  return res;
};
