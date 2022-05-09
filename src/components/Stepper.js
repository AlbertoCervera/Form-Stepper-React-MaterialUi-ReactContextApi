import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';
import ArticleIcon from '@mui/icons-material/Article';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


// DataContext
import { DataContext } from '../context/DataContext';
import { useContext } from "react";


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
     background: "#814EE7",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
        background: "#814EE7",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
    transition: "all .3s"
  },
}));

const ColorlibStepIconRoot = styled('div')(({  ownerState }) => ({
  zIndex: 1,
  color: 'grey',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    color: "#00ff93",
   
  }),
  ...(ownerState.completed && {
    color: "#814EE7"
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AssignmentIndIcon fontSize='large' />,
    2: <WorkIcon fontSize='large'/>,
    3: <ArticleIcon fontSize='large'/>,
    4:<SendIcon fontSize='large'/>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const stepsLabelTitle = ['Información Personal', 'Información Laboral', 'Datos', 'Finalizar y Enviar'];


export default function CustomizedSteppers() {
    const {steps}= useContext(DataContext)

    const [step] = steps
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
    
      <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
        {stepsLabelTitle.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
