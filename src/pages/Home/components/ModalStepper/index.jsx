import { useState, useCallback } from 'react';
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
import { Stepper } from './Stepper';
export const ModalStepper = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#FF3F98', borderRadius: '8px' }}
        onClick={() => setOpen(prev => !prev)}>
        Pedaleemos a los NFT's
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { ...styles.mainContainer },
        }}>
        <DialogContent sx={styles.scrollbar}>
          <DialogContentText>
            <Stepper setOpen={setOpen} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
