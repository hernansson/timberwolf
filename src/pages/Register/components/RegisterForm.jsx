import React, { useCallback, useState } from 'react';
import {
  OutlinedInput,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
  FormHelperText,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { VStack } from '../../../components/common';

import { validations } from './validations';
import { useAuth } from '../../../context/authContext';
export const RegisterForm = ({ handleAsync }) => {
  const { setOpenTos } = useAuth();
  const [userForm, setUserForm] = useState('');
  const [isValid, setIsValid] = useState({
    name: false,
    user: false,
    password: false,
    passwordVerify: false,
    tos: false,
  });

  const [isFirstEntry, setIsFirstEntry] = useState({
    name: true,
    user: true,
    password: true,
    passwordVerify: true,
    tos: true,
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    verifyPassword: false,
  });
  const handleChange = e => {
    if (isFirstEntry[e.target.name]) {
      setIsFirstEntry(prev => ({ ...prev, [e.target.name]: false }));
    }
    const isOk = !!validations[e.target.name](e.target.value);
    setIsValid({ ...isValid, [e.target.name]: isOk });
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
  const compareText = (t1, t2) => {
    setIsValid({ ...isValid, passwordVerify: t1 === t2 });
  };

  const handleCheck = e => {
    setIsValid({ ...isValid, [e.target.name]: e.target.checked });
  };

  const isAllValid = useCallback(() => {
    return Object.values(isValid).every(a => a === true);
  }, [isValid]);
  const onRegister = () => {
    if (isAllValid()) {
      handleAsync(userForm);
    }
  };
  return (
    <VStack sx={{ gap: '16px' }}>
      <Box>
        <InputLabel shrink sx={{ fontWeight: 700, color: '#FDFDFD' }}>
          Nombre:
        </InputLabel>
        <OutlinedInput
          name="name"
          fullWidth
          onChange={handleChange}
          sx={{ borderRadius: '8px' }}
        />
        {!isFirstEntry['name'] && (
          <FormHelperText error={!isValid['name']}>
            {isValid['name'] ? '' : 'Tu nombre no puede estar vacio'}
          </FormHelperText>
        )}
      </Box>
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
            {isValid['user'] ? '' : 'E-Mail Invalido'}
          </FormHelperText>
        )}
      </Box>
      <Box>
        <InputLabel shrink sx={{ fontWeight: 700, color: '#FDFDFD' }}>
          Contraseña:
        </InputLabel>
        <OutlinedInput
          type={showPassword['password'] ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() =>
                  setShowPassword(prev => ({
                    ...showPassword,
                    password: !showPassword['password'],
                  }))
                }
                edge="end">
                {showPassword['password'] ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          name="password"
          fullWidth
          onChange={handleChange}
          sx={{
            borderRadius: '8px',
          }}
        />
        {!isFirstEntry['password'] && (
          <FormHelperText error={!isValid['password']}>
            {isValid['password']
              ? ''
              : 'La contraseña debe ser mayor a 6 letras'}
          </FormHelperText>
        )}
      </Box>
      <Box>
        <InputLabel shrink sx={{ fontWeight: 700, color: '#FDFDFD' }}>
          Repite la contraseña:
        </InputLabel>
        <OutlinedInput
          type={showPassword['verifyPassword'] ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() =>
                  setShowPassword(prev => ({
                    ...showPassword,
                    verifyPassword: !showPassword['verifyPassword'],
                  }))
                }
                edge="end">
                {showPassword['verifyPassword'] ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
          name="passwordVerify"
          fullWidth
          onChange={e => {
            compareText(e.target.value, userForm['password']);
            setIsFirstEntry(prev => ({ ...prev, passwordVerify: false }));
          }}
          sx={{
            borderRadius: '8px',
          }}
        />

        {!isFirstEntry['passwordVerify'] && (
          <FormHelperText error={!isValid['passwordVerify']}>
            {isValid['passwordVerify'] ? '' : 'Deben coincidir las contraseñas'}
          </FormHelperText>
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
          name="tos"
          onChange={handleCheck}
          sx={{
            '.MuiFormControlLabel-label': {
              color: 'text.primary',
              fontWeight: 500,
              fontSize: '10px',
              textDecoration: isValid['tos'] ? 'none' : 'underline',
              textDecorationColor: isValid['tos'] ? 'none' : 'red',
              textDecorationThickness: isValid['tos'] ? 'none' : '2px',
            },
          }}
          control={<Checkbox />}
          label="Acepto los términos y condiciones y política de tratamiento de datos"
        />
        <Typography
          fontSize={'10px'}
          color={'white'}
          sx={{ textDecoration: 'underline', ':hover': { cursor: 'pointer' } }}
          variant="outlined"
          onClick={() => setOpenTos(prev => !prev)}>
          Anexo
        </Typography>
      </Box>

      <Button
        disabled={!isAllValid()}
        variant="contained"
        sx={{ borderRadius: '8px', padding: 1.5 }}
        onClick={onRegister}>
        Registrarse
      </Button>
    </VStack>
  );
};
