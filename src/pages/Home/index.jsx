import { Box } from '@mui/material';
import React from 'react';
import Background from '../../assets/img/landing/background.png';
import { BrandBanner } from './components/BrandBanner';
import { DoubtsBanner } from './components/DoubtsBanner';
import { Introduction } from './components/Introduction';
import { NFTBenefitsCard } from './components/NFTBenefitsCard';
import { NFTSection } from './components/NFTSection';
import { OfferBanner } from './components/Offerbanner';

export const Home = () => {
  document.body.style = `background-image: url(${Background});background-size:cover;background-repeat:no-repeat;background-attachment:fixed`;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '24px', md: '128px' },
      }}>
      <Introduction />
      <NFTBenefitsCard />
      <OfferBanner />
      <NFTSection />
      <DoubtsBanner />
      <BrandBanner />
    </Box>
  );
};
