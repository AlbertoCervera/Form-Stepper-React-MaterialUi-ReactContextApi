import { DataContext } from "./context/DataContext";
import { useContext } from "react";
// Styles
import "./App.css"
// ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// COMPONENTES
import Stepper from "./components/Stepper";
import InformacionPersonal from "./components/InformacionPersonal";
import InformacionLaboral from "./components/InformacionLaboral";
import Datos from "./components/Datos";
import FinalizarEnviar from "./components/FinalizarEnviar";
import Finalizado from "./components/Finalizado";
function Formularios (){
  const {steps}= useContext(DataContext)

  const [step] = steps

  switch (step) {
    case 0:
      return (
        <InformacionPersonal/>
      );
    case 1:
      return (
       <InformacionLaboral/>
      );
    case 2:
      return (
        <Datos/>
      );
    case 3:
      return(
        <FinalizarEnviar/>
      )
    case 4:
      return(
        <Finalizado/>
      )
  }
}


function App() {
  const {steps}= useContext(DataContext)

  const [step,setStep] = steps

  const handleClickVolver = ()=> {
    if(step > 0){
      setStep(step-1)
    }
  }

  const handleClickSiguiente = ()=> {
    if(step < 4){
      setStep(step+1)
    }
  }


  return (


    <div className="App">

      <div className="form">
        {/* Logo */}
        <div className="logo">
          <h1 className="equality">ƎQUALITY</h1>
          <h1 className="momentum">MOMENTUM</h1>
        </div>
        {/* Barra de pasos */}
        <Stepper/>
        {/* Formularios */}

        <Formularios/>

        {/* Fin Formularios */}
        <span className="buttons">
          
          <button onClick={handleClickVolver}><ArrowBackIcon/>Volver</button>
          <button onClick={handleClickSiguiente}>{step == 3?"Guardar": "Siguiente"} <ArrowForwardIcon /></button>
        </span>
      </div>

    </div>


    
  );
}

export default App;
