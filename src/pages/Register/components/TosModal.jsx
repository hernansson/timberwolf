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
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './styles';
import { tosText, tosGeneral, tosSubasta } from './tosText';
import { useAuth } from '../../../context/authContext';

export const TosModal = () => {
  const { openTos, setOpenTos } = useAuth();
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    setOpenTos(false);
  };

  return (
    <div>
      <Dialog
        open={openTos}
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
              ANEXO
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={styles.scrollbar}>
          <DialogContentText>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography color={'text.primary'}>
                  AUTORIZACIÓN TRATAMIENTO DE DATOS PERSONALES
                </Typography>
                <Typography>{tosText}</Typography>
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography color={'text.primary'}>
                  TÉRMINOS Y CONDICIONES GENERALES DEL SITIO WEB
                </Typography>
                <Typography textOverflow={'clip'}>{tosGeneral}</Typography>
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Typography color={'text.primary'}>
                  TERMINOS Y CONDICIONES SUBASTA ELECTRONICA “NFTS MANZANA
                  POSTOBÓN”
                </Typography>
                <Typography>{tosSubasta}</Typography>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
