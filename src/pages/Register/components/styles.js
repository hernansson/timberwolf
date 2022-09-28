export const styles = {
  mainContainer: {
    background: 'rgba( 255, 255, 255, 0.1 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur(50.5px )',
    borderRadius: '30px',
    border: '3px solid rgba( 255, 255, 255, 0.4 )',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '80%',
    alignSelf: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: '16px', md: '96px' },
    alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit',
    width: '90%',
  },
  modal: {
    background: 'rgba( 0, 0, 0, 0.4 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur(50.5px )',
    borderRadius: '30px',
    border: '3px solid rgba( 255, 255, 255, 0.4 )',
    padding: 8,
  },
  scrollbar: {
    scrollbarWidth: 'auto',
    '&::-webkit-scrollbar': {
      width: '7px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#1E1E1E',
      borderRadius: '10px',
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#D9D9D9',
      height: '2px',
      borderRadius: '10px',
      border: '5px solid #D9D9D9',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'black',
    },
  },
};
