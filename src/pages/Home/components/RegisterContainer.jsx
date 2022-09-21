import React from 'react';
import { RegisterForm } from './RegisterForm';
import { useNavigate } from 'react-router-dom';
export const RegisterContainer = () => {
  //useHook with some isLoading / is error logic.
  const navigate = useNavigate();
  const handleAsync = data => {
    console.log(data);
    navigate('/confirmation');
  };
  return (
    <div>
      <RegisterForm handleAsync={handleAsync} />
    </div>
  );
};
