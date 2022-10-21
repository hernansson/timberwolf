import { isIOS } from '../../../../utils/isIOS';

export const styles = {
  mainContainer: {
    background: isIOS()
      ? 'rgba( 100, 100, 100, 0.6 )'
      : 'rgba( 255, 255, 255, 0.1 )',
    backdropFilter: 'blur(50.5px)',
    '-webkit-backdrop-filter': 'blur(50.5px)',
    borderRadius: '30px',
    border: '3px solid rgba( 255, 255, 255, 0.4 )',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '32px', md: '40px' },
    margin: '10px',
  },
};
