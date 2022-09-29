import { useState } from 'react';
import {
  Box,
  CardMedia,
  Typography,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import React from 'react';
import { numberWithDots } from '../../../utils/numberWithDots';
export const NFTContent = ({ img, price = 500000, nextprice = 650000 }) => {
  const [age, setAge] = useState(nextprice);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '32px', md: '64px' },
      }}>
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <CardMedia
          component={'img'}
          src={'https://images.wsj.net/im-491398?width=700&height=699'}
          sx={{ borderRadius: '30px' }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: { xs: 'flex-start', md: 'center' },
          width: { xs: '100%', md: '50%' },
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: { xs: '100%', md: '80%' },
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
            <Typography
              fontWeight={700}
              fontSize={'20px'}
              color={'text.primary'}>
              Ultima oferta:
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={'40px'}
              sx={{ color: '#FF3F98' }}>
              {`$${numberWithDots(price)} 🔥`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
            <Typography
              fontWeight={700}
              fontSize={'20px'}
              color={'text.primary'}>
              Ofertar
            </Typography>
            <Select
              value={age}
              onChange={e => setAge(e.target.value)}
              displayEmpty
              sx={{ fontSize: '40px', width: '100%' }}
              defaultValue={nextprice}
              inputProps={{ 'aria-label': 'Without label' }}>
              <MenuItem
                sx={{ fontSize: '40px' }}
                value={nextprice}>{`$${numberWithDots(nextprice)}`}</MenuItem>
              <MenuItem
                sx={{ fontSize: '40px' }}
                value={nextprice + 100000}>{`$${numberWithDots(
                nextprice + 100000,
              )}`}</MenuItem>
              <MenuItem
                sx={{ fontSize: '40px' }}
                value={nextprice + 200000}>{`$${numberWithDots(
                nextprice + 200000,
              )}`}</MenuItem>
              <MenuItem
                sx={{ fontSize: '40px' }}
                value={nextprice + 300000}>{`$${numberWithDots(
                nextprice + 300000,
              )}`}</MenuItem>
            </Select>
          </Box>
          <Button
            variant={'contained'}
            sx={{
              backgroundColor: '#FF3F98',
              height: '48px',
              borderRadius: '8px',
            }}>
            OFERTAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
