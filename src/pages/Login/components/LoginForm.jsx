import React, { useState } from 'react';
import {
  OutlinedInput,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
  FormHelperText,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { VStack } from '../../../components/common';
import { validations } from './validations';
import { useNavigate } from 'react-router-dom';
export const LoginForm = ({ handleAsync }) => {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState('');
  const [isValid, setIsValid] = useState({
    password: false,
    user: false,
  });
  const [isFirstEntry, setIsFirstEntry] = useState({
    password: true,
    user: true,
  });

  const handleChange = e => {
    if (isFirstEntry[e.target.name]) {
      setIsFirstEntry(prev => ({ ...prev, [e.target.name]: false }));
    }
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
          name="user"
          fullWidth
          onChange={handleChange}
          sx={{ borderRadius: '8px' }}
        />
        {!isFirstEntry['user'] && (
          <FormHelperText error={!isValid['user']}>
            {isValid['user'] ? '' : 'E-Mail invalido'}
          </FormHelperText>
        )}
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
        {!isFirstEntry['password'] && (
          <FormHelperText error={!isValid['password']}>
            {isValid['password'] ? '' : 'No puede estar vacio'}
          </FormHelperText>
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
        <Typography color={'text.primary'}>No tienes cuenta?</Typography>{' '}
        <Typography
          onClick={() => navigate('/register')}
          fontWeight={700}
          sx={{
            color: '#FF3F98',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}>
          Registrate
        </Typography>
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
