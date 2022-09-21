import React, { useState } from 'react';
import {
  OutlinedInput,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import { VStack } from '../../../components/common';
import { Modal } from './Modal';
export const RegisterForm = ({ handleAsync }) => {
  const [userForm, setUserForm] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const handleChange = e => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
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
      </Box>
      <Box>
        <InputLabel shrink sx={{ fontWeight: 700, color: '#FDFDFD' }}>
          Celular:
        </InputLabel>
        <OutlinedInput
          name="phone"
          fullWidth
          onChange={handleChange}
          sx={{
            borderRadius: '8px',
          }}
        />
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
            },
          }}
          control={<Checkbox defaultChecked />}
          label="Autorizo el tratamiento de uso de datos"
        />
        <Modal open={openModal} setOpen={setOpenModal} />
      </Box>

      <Button
        variant="contained"
        sx={{ borderRadius: '8px', padding: 1.5 }}
        onClick={() => handleAsync(userForm)}>
        Registrarse
      </Button>
    </VStack>
  );
};
