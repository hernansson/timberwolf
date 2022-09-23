import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './styles';
import { tosText } from './tosText';
import { Box } from '@mui/system';
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
