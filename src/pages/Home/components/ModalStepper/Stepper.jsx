import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

export const Stepper = ({ setOpen }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const step = React.useCallback(() => {
    let myStep;
    switch (activeStep) {
      case 0:
        myStep = <StepOne />;
        break;
      case 1:
        myStep = <StepTwo />;
        break;
      case 2:
        myStep = <StepThree />;
        break;
      default:
        myStep = <StepOne />;
    }
    return myStep;
  }, [activeStep]);

  return (
    <Box
      sx={{
        maxWidth: 600,
        flexGrow: 1,
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
      {step()}
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          background: 'rgba( 0, 0, 0, 0.2 )',
          borderRadius: '30px',
          width: '100%',
        }}
        nextButton={
          activeStep === 2 ? (
            <Button
              size="small"
              onClick={() => setOpen(false)}
              sx={{ color: 'white' }}>
              Cerrar
            </Button>
          ) : (
            <Button
              size="small"
              onClick={handleNext}
              sx={{ color: 'white' }}
              disabled={activeStep === maxSteps - 1}>
              Siguiente
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          )
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            sx={{ color: 'white' }}
            disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Atras
          </Button>
        }
      />
    </Box>
  );
};
