import "./CardForm.css"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputText from "./inputs/InputText";
import InputDate from "./inputs/InputDate";
import InputRadio from "./inputs/InputRadio";
import Options from "./inputs/Options";


// CONSTANTES
import { NACIONALIDADES,SEXO,NIVELES_ESTUDIO } from "../constants";
import InputHijos from "./inputs/InputHijos";

// Context
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export default function InformacionPersonal() {
    const {global}= useContext(DataContext)
    const [globalData,setGlobalData] = global

    const handleInputChange = (event) => {
       
        let name = event.target.name
        let value = event.target.value
        setGlobalData(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    return(
        <div className="card-form">
            <h1 style={{textAlign:"center"}}>
                <AssignmentIndIcon sx={{fontSize:"40px"}}/>  
                Información personal
            </h1>
            <div className="inputs">
                <InputText label="Nombre" name="nombre" onChange={handleInputChange}/>
                <Options pregunta="Nacionalidad" respuestas={NACIONALIDADES} name="nacionalidad" onChange={handleInputChange}/>
                <Options pregunta="Sexo" respuestas={SEXO} name="sexo" onChange={handleInputChange}/>
                <InputDate label="Fecha de Nacimiento" name="fechaNacimiento" onChange={handleInputChange}/>
                <InputRadio pregunta="¿Es una persona con discapacidad?" width="210px" name="discapacidad" onChange={handleInputChange}/>
                <InputRadio pregunta="¿Forma parte del órgano de representación de la plantilla?" width="350px" name="organo" onChange={handleInputChange}/>
                <Options pregunta="Nivel de Estudios" respuestas={NIVELES_ESTUDIO} name="nivelEstudio" onChange={handleInputChange}/>
                <InputText label="Responsabilidades Familiares" name="responsabilidades" onChange={handleInputChange}/>
                <Options pregunta="Nivel de Estudios que da acceso al puesto" respuestas={NIVELES_ESTUDIO} name="nivelAcceso" onChange={handleInputChange}/>
                <InputHijos onChange={handleInputChange}/>
            </div>
        </div>
    )
}