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
import { Modal } from './Modal';
import { validations } from './validations';
export const RegisterForm = ({ handleAsync }) => {
  const [userForm, setUserForm] = useState('');
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    phone: false,
    tos: false,
  });
  const [openModal, setOpenModal] = useState(false);
  const handleChange = e => {
    let isOk;
    if (e.target.checked) {
      isOk = true;
    } else {
      isOk = !!validations[e.target.name](e.target.value);
    }

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
          Nombre:
        </InputLabel>
        <OutlinedInput
          name="name"
          fullWidth
          onChange={handleChange}
          sx={{ borderRadius: '8px' }}
        />
        <FormHelperText error={!isValid['name']}>
          {isValid['name'] ? '' : 'Tu nombre no puede estar vacio'}
        </FormHelperText>
      </Box>
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
          {isValid['email'] ? '' : 'E-Mail Invalido'}
        </FormHelperText>
      </Box>
      <Box>
        <InputLabel shrink sx={{ fontWeight: 700, color: '#FDFDFD' }}>
          Celular:
        </InputLabel>
        <OutlinedInput
          type="number"
          name="phone"
          fullWidth
          onChange={handleChange}
          sx={{
            borderRadius: '8px',
          }}
        />
        <FormHelperText error={!isValid['phone']}>
          {isValid['phone'] ? '' : 'Celular invalido'}
        </FormHelperText>
      </Box>
      <Box>
        <FormControlLabel
          name="tos"
          onChange={handleChange}
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
          label="Autorizo el tratamiento de uso de datos"
        />
        <Modal open={openModal} setOpen={setOpenModal} />
      </Box>

      <Button
        variant="contained"
        sx={{ borderRadius: '8px', padding: 1.5 }}
        onClick={onRegister}>
        Registrarse
      </Button>
    </VStack>
  );
};
