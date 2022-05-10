import { DataContext } from "./context/DataContext";
import { useContext } from "react";
// Styles
import "./App.css"
// COMPONENTES
import Stepper from "./components/Stepper";
import InformacionPersonal from "./components/InformacionPersonal";
import InformacionLaboral from "./components/InformacionLaboral";
import Datos from "./components/Datos";
import FinalizarEnviar from "./components/FinalizarEnviar";
import Finalizado from "./components/Finalizado";
import ButtonsForms from "./components/ButtonsForm";


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
    default:
      return(<InformacionPersonal/>)
  }
}


function App() {
 



  return (


    <div className="App">

      <div className="form">
        
        {/* Logo */}
        <div className="logo">
          <h1 className="equality">ƎQUALITY</h1>
          <h1 className="momentum">MOMENTUM</h1>
        </div>

        <Stepper/>
        <Formularios/>
        <ButtonsForms/>
        
      </div>

    </div>


    
  );
}

export default App;
