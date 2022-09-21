import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const style = { icon: { width: '16px', height: '16px', color: 'white' } };
export const socialmedias = [
  {
    name: 'facebook',
    icon: <FacebookIcon style={style.icon} />,
    link: 'https://www.facebook.com/bitsports.co/',
  },
  {
    name: 'twiter',
    icon: <TwitterIcon style={style.icon} />,
    link: 'https://twitter.com/bitsportsco?lang=en',
  },
  {
    name: 'linkedin',
    icon: <LinkedInIcon style={style.icon} />,
    link: 'https://www.linkedin.com/company/bitsports',
  },
  {
    name: 'instagram',
    icon: <InstagramIcon style={style.icon} />,
    link: 'https://www.instagram.com/bitsports.co/',
  },
];
