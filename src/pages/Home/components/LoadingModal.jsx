import * as React from 'react';
import { Dialog, DialogContent, DialogContentText } from '@mui/material';
import { styles } from './styles';
export const LoadingModal = ({ open, setOpen }) => {
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
        <DialogContentText>{'Loading...'}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
