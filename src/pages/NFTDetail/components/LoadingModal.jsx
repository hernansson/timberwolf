import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';
export const LoadingModal = ({ open, setOpen, message, isSuccess }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = React.useCallback(() => {
    if (isSuccess) {
      handleClose();
      navigate('/');
    } else {
      handleClose();
    }
  }, [isSuccess]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: { ...styles.modal },
      }}>
      <DialogContent sx={styles.scrollbar}>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#FF3F98', borderRadius: '8px' }}
          onClick={() => handleClick()}>
          <Typography color={'text.primary'}>Cerrar</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
