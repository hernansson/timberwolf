import React, { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { bidNFT } from '../../../api/bidNFT';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
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
      setMessage('Puja realizada satisfactoriamente');
      //navigate('/');
    }
  }, [isError, isLoading, isSuccess]);
  return (
    <>
      <LoadingModal
        message={message}
        open={open}
        setOpen={setOpen}
        isSuccess={isSuccess}
      />
      {user ? (
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
