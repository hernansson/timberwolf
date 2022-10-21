import React, { useState, useCallback } from 'react';
import {
  OutlinedInput,
  InputLabel,
  Button,
  FormHelperText,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Box } from '@mui/system';
import { VStack } from '../../../components/common';
import { validations } from './validations';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export const LoginForm = ({ handleAsync }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
    const isOk = validations[e.target.name](e.target.value);
    setIsValid({ ...isValid, [e.target.name]: isOk });
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
  const isAllValid = useCallback(() => {
    return Object.values(isValid).every(a => a === true);
  }, [isValid]);

  const onLogin = () => {
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
          autoComplete="off"
          name="user"
          fullWidth
          onChange={handleChange}
          sx={{
            borderRadius: '8px',
          }}
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
          autoComplete="off"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={userForm['password']}
          fullWidth
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(prev => !prev)}
                edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
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
        disabled={!isAllValid()}
        variant="contained"
        sx={{ borderRadius: '8px', padding: 1.5 }}
        onClick={onLogin}>
        Login
      </Button>
    </VStack>
  );
};
