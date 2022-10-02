import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Background from '../../assets/img/landing/background_home.png';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { faqs } from './faqs';

export const Faqs = () => {
  document.body.style = `background-image: url(${Background});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '80px',
      }}>
      <Box
        sx={{
          width: { md: '70%', xs: '90%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
        <Typography
          fontSize={'25px'}
          fontWeight={700}
          color={'text.primary'}
          pb={'16px'}>
          Frequently Asked Questions (FAQs)
        </Typography>
        {faqs.map((faq, idx) => (
          <Accordion
            key={idx}
            sx={{
              background:
                'linear-gradient(76.06deg, rgba(234, 233, 233, 0.132) -4.84%, rgba(128, 128, 128, 0.0855) -4.83%)',
              boxShadow: '63px 58px 77px rgba(0, 0, 0, 0.58)',
              backdropFilter: 'blur(49.5px )',
              borderRadius: '8px',
              border: '1.82546px solid white',
            }}>
            <AccordionSummary
              sx={{
                height: '62px',
                alignItems: 'center',
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                },
              }}
              expandIcon={<ExpandMoreIcon />}>
              <DescriptionOutlinedIcon
                color="secondary"
                sx={{ marginRight: 2 }}
              />
              <Typography fontSize={'20px'} fontWeight={700}>
                {faq.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '0.5rem',
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                {faq.paragraphs.map((e, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '22px',
                    }}>
                    {e}
                  </Typography>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
