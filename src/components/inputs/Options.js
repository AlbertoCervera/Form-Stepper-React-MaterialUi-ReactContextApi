import "./Inputs.css"


export default function Options(props){
  
    return(
        <label>
            {props.pregunta}
            <select name="select" defaultValue="DEFAULT" >
                <option value="DEFAULT" disabled hidden >Desplegar...</option>
                {props.respuestas.map((respuesta,index)=>
                    <option key={index} value={respuesta}>{respuesta}</option>
                )}
            </select>
        </label>
    )
}