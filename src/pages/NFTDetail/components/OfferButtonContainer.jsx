import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { bidNFT } from '../../../api/bidNFT';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingModal } from './LoadingModal';
import { useAuth } from '../../../context/authContext';

export const OfferButtonContainer = ({ offer }) => {
  const { id } = useParams();
  const { isError, error, isLoading, mutate, isSuccess, data } =
    useMutation(bidNFT);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Cargando...');
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleAsync = () => {
    const data = {
      id_product: id,
      value: offer,
    };
    mutate(data);
  };

  useEffect(() => {
    if (isError) {
      setMessage('Ha ocurrido un error, vuelva a intentarlo');
      console.log(error);
    }
    if (isLoading) {
      setMessage('Cargando...');
      setOpen(true);
    }
    if (isSuccess) {
      console.log(data.id_factura);
      console.log(data.value);
      document.getElementById('factura').value = Number(data.id_factura);
      document.getElementById('valor').value = Number(data.value);
      setMessage('Redirigiendo a tu compra...');
      document.getElementById('myForm').submit();
      //navigate('/');
    }
  }, [isError, isLoading, isSuccess]);
  return (
    <>
      <LoadingModal message={message} open={open} setOpen={setOpen} />
      {user ? (
        <>
          <form
            id="myForm"
            method="POST"
            action="https://gateway2.tucompra.com.co/tc/app/inputs/compra.jsp">
            <input name="factura" id="factura" type="hidden" value={''} />
            <input name="valor" id="valor" type="hidden" value={''} />
            <input
              name="descripcionFactura"
              id="descripcionFactura"
              type="hidden"
              value={`${id} NFT`}
            />
            <input name="usuario" type="hidden" value="ng229a29856zzom5" />
            <Button
              onClick={handleAsync}
              variant={'contained'}
              // type={'submit'}
              sx={{
                width: '100%',
                backgroundColor: '#FF3F98',
                height: '48px',
                borderRadius: '8px',
              }}>
              OFERTAR
            </Button>{' '}
          </form>

          {/*
            <Button
              onClick={handleAsync}
              variant={'contained'}
              sx={{
                backgroundColor: '#FF3F98',
                height: '48px',
                borderRadius: '8px',
              }}>
              OFERTAR
            </Button>
            */}
        </>
      ) : (
        <Button
          variant={'contained'}
          sx={{
            backgroundColor: '#FF3F98',
            height: '48px',
            borderRadius: '8px',
          }}
          onClick={() => navigate('/login')}>
          Iniciar Sesion
        </Button>
      )}
    </>
  );
};
