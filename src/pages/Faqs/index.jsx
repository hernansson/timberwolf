import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from '@mui/material';
import Background from '../../assets/img/landing/background_home.png';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
export const Faqs = () => {
  document.body.style = `background-image: url(${Background});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box sx={{ width: '60%' }}>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <DescriptionOutlinedIcon
              color="secondary"
              sx={{ marginRight: 2 }}
            />
            Atributos
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '0.5rem',
            }}>
            <Box
              sx={{
                background: 'rgba(213, 186, 255, 0.08)',
                border: '1px solid rgba(213, 186, 255, 0.08)',
                borderRadius: '6px',
                padding: '0.5rem',
              }}>
              <Typography sx={{ fontSize: '12px', fontWeight: 400 }}>
                {'attribute.trait_type'}
              </Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>
                {'attribute.valu'}
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
