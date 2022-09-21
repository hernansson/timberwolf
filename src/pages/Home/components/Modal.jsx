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
export const Modal = ({ open, setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        fontSize={'10px'}
        color={'white'}
        sx={{ textDecoration: 'underline', ':hover': { cursor: 'pointer' } }}
        variant="outlined"
        onClick={handleClickOpen}>
        Anexo tratamiento de datos
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { ...styles.modal, height: onlyMediumScreen ? '80%' : '40%' },
        }}>
        <DialogTitle>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                paddingBottom: '24px',
                alignSelf: 'flex-end',
                ':hover': { backgroundColor: 'transparent' },
              }}>
              <CloseIcon
                sx={{
                  fontSize: '40px',
                }}
              />
            </IconButton>
            <Typography
              sx={{ fontSize: { xs: '16px', md: '24px' } }}
              fontWeight={700}>
              AUTORIZACIÓN TRATAMIENTO DE DATOS PERSONALES
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={styles.scrollbar}>
          <DialogContentText>{tosText}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
