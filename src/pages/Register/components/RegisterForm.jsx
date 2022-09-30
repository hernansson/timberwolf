import React, { useCallback, useState } from 'react';
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
import { Modal } from './Modal';
import { validations } from './validations';
export const RegisterForm = ({ handleAsync }) => {
  const [userForm, setUserForm] = useState('');
  const [isValid, setIsValid] = useState({
    name: false,
    user: false,
    password: false,
    passwordVerify: false,
    tos: false,
  });
  const [openModal, setOpenModal] = useState(false);
  const [isFirstEntry, setIsFirstEntry] = useState({
    name: true,
    user: true,
    password: true,
    passwordVerify: true,
    tos: true,
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
    setIsValid({ ...isValid, ['passwordVerify']: t1 === t2 });
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
          name="passwordVerify"
          fullWidth
          onChange={e => compareText(e.target.value, userForm.password)}
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
      <Box>
        <FormControlLabel
          name="tos"
          onChange={handleCheck}
          sx={{
            '.MuiFormControlLabel-label': {
              color: 'text.primary',
              fontWeight: 500,
              fontSize: '10px',
              textDecoration:
                isValid['tos'] || isFirstEntry['tos'] ? 'none' : 'underline',
              textDecorationColor:
                isValid['tos'] || isFirstEntry['tos'] ? 'none' : 'red',
              textDecorationThickness:
                isValid['tos'] || isFirstEntry['tos'] ? 'none' : '2px',
            },
          }}
          control={<Checkbox />}
          label="Autorizo el tratamiento de uso de datos"
        />
        <Modal open={openModal} setOpen={setOpenModal} />
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
