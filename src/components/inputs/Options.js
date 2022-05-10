import "./Inputs.css"


export default function Options(props){
  
    return(
        <label className="label-desplegable">
            {props.pregunta}
            <select name="select" defaultValue="DEFAULT" >
                <option value="DEFAULT" disabled hidden >Desplegar...</option>
                {props.respuestas.map((respuesta,index)=>
                    <option className="select-items" key={index} value={respuesta}>{respuesta}</option>
                )}
            </select>
        </label>
    )
}