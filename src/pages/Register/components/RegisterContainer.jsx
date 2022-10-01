import React, { useEffect, useState } from 'react';
import { RegisterForm } from './RegisterForm';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../../../api/createUser';
import { LoadingModal } from './LoadingModal';
export const RegisterContainer = () => {
  const [message, setMessage] = useState('Cargando...');
  const [open, setOpen] = useState(false);
  const { isError, error, isLoading, mutate, isSuccess } =
    useMutation(createUser);
  const navigate = useNavigate();

  const handleAsync = user => {
    mutate(user);
  };
  useEffect(() => {
    if (isError) {
      setMessage(error.response.data.message);
    }
    if (isLoading) {
      setOpen(true);
    }
    if (isSuccess) {
      setMessage('Registro exitoso!');
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div>
      <RegisterForm handleAsync={handleAsync} />
      <LoadingModal
        open={open}
        setOpen={setOpen}
        message={message}
        isSuccess={isSuccess}
      />
    </div>
  );
};
