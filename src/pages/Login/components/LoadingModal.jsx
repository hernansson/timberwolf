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
export const LoadingModal = ({ open, setOpen, message }) => {
  const handleClose = () => {
    setOpen(false);
  };

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
          onClick={handleClose}>
          <Typography color={'text.primary'}>Cerrar</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
