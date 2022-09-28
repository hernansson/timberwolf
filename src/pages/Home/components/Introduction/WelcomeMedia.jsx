import { CardMedia } from '@mui/material';
import React from 'react';
import presentation from '../../../../assets/videos/presentation_video.mp4';
export const WelcomeMedia = () => {
  return (
    <CardMedia
      component={'video'}
      src={presentation}
      sx={{ width: '300px', borderRadius: '30px' }}
      controls
    />
  );
};
