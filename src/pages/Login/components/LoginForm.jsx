import React, { useState } from 'react';
import {
  OutlinedInput,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
  FormHelperText,
} from '@mui/material';
import { Box } from '@mui/system';
import { VStack } from '../../../components/common';
import { validations } from './validations';
export const LoginForm = ({ handleAsync }) => {
  const [userForm, setUserForm] = useState('');
  const [isValid, setIsValid] = useState({
    password: false,
    email: false,
  });

  const handleChange = e => {
    const isOk = !!validations[e.target.name](e.target.value);
    setIsValid({ ...isValid, [e.target.name]: isOk });
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const onRegister = () => {
    const isAllValid = Object.values(isValid).every(a => a === true);
    if (isAllValid) {
      handleAsync(userForm);
    }
  };
  return (
    <VStack sx={{ gap: '16px' }}>
      <Box>
        <InputLabel shrink sx={{ fontWeight: 700, color: '#FDFDFD' }}>
          E-Mail:
        </InputLabel>
        <OutlinedInput
          name="email"
          fullWidth
          onChange={handleChange}
          sx={{ borderRadius: '8px' }}
        />
        <FormHelperText error={!isValid['email']}>
          {isValid['email'] ? '' : 'E-Mail invalido'}
        </FormHelperText>
      </Box>
      <Box>
        <InputLabel shrink sx={{ fontWeight: 700, color: '#FDFDFD' }}>
          Password:
        </InputLabel>
        <OutlinedInput
          name="password"
          fullWidth
          onChange={handleChange}
          sx={{ borderRadius: '8px' }}
        />
        <FormHelperText error={!isValid['password']}>
          {isValid['password'] ? '' : 'No puede estar vacio'}
        </FormHelperText>
      </Box>

      <Button
        variant="contained"
        sx={{ borderRadius: '8px', padding: 1.5 }}
        onClick={onRegister}>
        Login
      </Button>
    </VStack>
  );
};
