import React from 'react';
import { RegisterForm } from './RegisterForm';
export const RegisterContainer = () => {
  //useHook with some isLoading / is error logic.

  const handleAsync = data => {
    console.log(data);
  };
  return (
    <div>
      <RegisterForm handleAsync={handleAsync} />
    </div>
  );
};
