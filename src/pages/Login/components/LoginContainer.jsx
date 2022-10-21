import React, { useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../../../api/loginUser';
import { LoadingModal } from './LoadingModal';
import { useAuth } from '../../../context/authContext';
export const LoginContainer = () => {
  const { setUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Cargando...');
  const { isError, error, isLoading, mutate, isSuccess, data } =
    useMutation(loginUser);
  const navigate = useNavigate();

  const handleAsync = user => {
    mutate(user);
  };
  useEffect(() => {
    if (isError) {
      setMessage('Usuario y/o contraseña incorrecto.');
      console.log(error);
    }
    if (isLoading) {
      setMessage('Cargando...');
      setOpen(true);
    }
    if (isSuccess) {
      localStorage.setItem('token', JSON.stringify(data.token));
      setUser(data);
      setOpen(false);
      navigate(-1);
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div>
      <LoginForm handleAsync={handleAsync} />
      <LoadingModal open={open} setOpen={setOpen} message={message} />
    </div>
  );
};
