import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const style = { icon: { width: '20px', height: '20px', color: 'white' } };
export const socialmedias = [
  {
    name: 'facebook',
    icon: <FacebookIcon style={style.icon} />,
    link: 'https://www.facebook.com/ManzanaPostobonOficial/',
  },
  /*{
    name: 'twiter',
    icon: <TwitterIcon style={style.icon} />,
    link: 'https://twitter.com/',
  },
  {
    name: 'linkedin',
    icon: <LinkedInIcon style={style.icon} />,
    link: 'https://www.linkedin.com/',
  },*/
  {
    name: 'instagram',
    icon: <InstagramIcon style={style.icon} />,
    link: 'https://www.instagram.com/manzanapostobon/',
  },
];
