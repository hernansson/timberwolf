import { Box, Typography, List, ListItem, Button } from '@mui/material';
import React from 'react';
import { benefitList } from './benefitList';
export const Benefits = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: { xs: 0, md: 8 },
      }}>
      <Typography fontSize={'24px'} fontWeight={700} color={'text.primary'}>
        Beneficios NFT
      </Typography>
      <List
        sx={{
          listStyleType: 'disc',
          '& .MuiListItem-root': {
            display: 'list-item',
            color: 'white',
            fontWeight: 700,
            fontSize: '16px',
          },
        }}>
        {benefitList.map((e, idx) => (
          <ListItem key={idx}>{e}</ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#FF3F98', borderRadius: '8px' }}>
        Saber mas
      </Button>
    </Box>
  );
};
