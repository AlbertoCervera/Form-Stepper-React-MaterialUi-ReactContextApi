import "./CardForm.css"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputText from "./inputs/InputText";
import InputDate from "./inputs/InputDate";
import InputRadio from "./inputs/InputRadio";
import Options from "./inputs/Options";


// CONSTANTES
import { NACIONALIDADES,SEXO,NIVELES_ESTUDIO } from "../constants";

export default function InformacionPersonal() {

    return(
        <div className="card-form">
            <h1 style={{textAlign:"center"}}><AssignmentIndIcon sx={{fontSize:"40px"}}/>  
                Información personal
            </h1>

            <div className="inputs">
                <InputText label="Nombre" name="nombre"/>
                
                <InputDate label="Fecha de Nacimiento"/>
                <InputRadio pregunta="¿Es una persona con discapacidad?"     width="220px" name="sexo"/>

                <Options pregunta="Nacionalidad" respuestas={NACIONALIDADES}/>
                <Options pregunta="Sexo" respuestas={SEXO}/>
                <InputRadio pregunta="¿Forma parte del órgano de representación de la plantilla?"     width="380px" name="sexo"/>
                <Options pregunta="Nivel de Estudios" respuestas={NIVELES_ESTUDIO}/>
                <InputText label="Responsabilidades Familiares" name="responsabilidades"/>

            </div>
        </div>
    )
}