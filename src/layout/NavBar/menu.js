import HomeIcon from '@mui/icons-material/Home';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
export const menu = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    style: { fontWeight: 700, fontStyle: 'italic', cursor: 'pointer' },
    path: '/home',
  },
  {
    name: 'Ofertar 🔥',
    icon: <LocalOfferIcon />,
    style: { cursor: 'pointer' },
    path: '/home',
  },
  {
    name: 'FAQS',
    icon: <LiveHelpIcon />,
    style: { cursor: 'pointer' },
    path: '/faqs',
  },
];
