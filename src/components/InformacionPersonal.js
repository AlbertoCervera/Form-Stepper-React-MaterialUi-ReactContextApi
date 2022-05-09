import "./CardForm.css"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputText from "./inputs/InputText";
import InputDate from "./inputs/InputDate";
import InputRadio from "./inputs/InputRadio";
import Options from "./inputs/Options";


// CONSTANTES
import { NACIONALIDADES,SEXO } from "../constants";

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
            </div>
        </div>
    )
}