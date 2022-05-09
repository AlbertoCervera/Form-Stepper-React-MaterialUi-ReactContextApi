import "./Inputs.css"


export default function InputRadio(props){
    const name = props.name
    return(
        <span className="inputRadio">
            {props.pregunta}
            <div style={{width:props.width}}>
                <label>
                    Si
                    <input type="radio" name={name} value="true"/>
                </label>
                <label>
                    No
                    <input type="radio" name={name} value="false"/>
                </label>
            </div>
        </span>
    )
}