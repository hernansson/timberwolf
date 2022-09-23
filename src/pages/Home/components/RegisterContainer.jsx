import React, { useEffect, useState } from 'react';
import { RegisterForm } from './RegisterForm';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../../../api/createUser';
import { LoadingModal } from './LoadingModal';
export const RegisterContainer = () => {
  const [open, setOpen] = useState(false);
  const { isError, error, isLoading, mutate, isSuccess } =
    useMutation(createUser);
  const navigate = useNavigate();

  const handleAsync = user => {
    mutate(user);
  };
  useEffect(() => {
    if (isError) {
      setOpen(false);
      console.log(error);
    }
    if (isLoading) {
      setOpen(true);
    }
    if (isSuccess) {
      setOpen(false);
      navigate('/confirmation');
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div>
      <RegisterForm handleAsync={handleAsync} />
      <LoadingModal open={open} setOpen={setOpen} />
    </div>
  );
};
