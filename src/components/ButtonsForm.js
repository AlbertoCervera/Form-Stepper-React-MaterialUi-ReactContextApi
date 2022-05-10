import { DataContext } from "../context/DataContext";
import { useContext } from "react";
// Styles
import "./ButtonsForm.css"
// ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function ButtonsForms() {
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
    

    
    if(step === 0){
      return(
        <span className="buttons">      
            <button onClick={handleClickSiguiente}>{step === 3?"Guardar": "Siguiente"} <ArrowForwardIcon /></button>
        </span>
      )
    }else if(step < 4){

      return(
        <span className="buttons">      
            <button onClick={handleClickVolver}><ArrowBackIcon/>Volver</button>
            <button onClick={handleClickSiguiente}>{step === 3?"Guardar": "Siguiente"} <ArrowForwardIcon /></button>
        </span>
      )
    }else{
      return(
        <span className="buttons">      
            <button onClick={()=>window.location="/"}>Volver a la Página</button>
        </span>
        )
    }


}