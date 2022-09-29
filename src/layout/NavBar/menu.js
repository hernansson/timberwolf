import WhatshotIcon from '@mui/icons-material/Whatshot';
export const menu = [
  {
    name: 'Home',
    icon: '',
    style: { fontWeight: 700, fontStyle: 'italic', cursor: 'pointer' },
    path: '/home',
  },
  {
    name: 'Ofertar',
    icon: <WhatshotIcon sx={{ color: 'red' }} />,
    style: { cursor: 'pointer' },
  },
  { name: 'FAQS', icon: '', style: { cursor: 'pointer' } },
];
