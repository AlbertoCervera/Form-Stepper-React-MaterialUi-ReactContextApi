import "./Inputs.css"


export default function InputRadio(props){
    const name = props.name
    return(
        <span className="inputRadio">
            {props.pregunta}
            <div style={{width:props.width} } onChange={props.onChange}>
                <label>
                    Si
                    <input name={name} type="radio" value="true"/>
                </label>
                <label>
                    No
                    <input name={name} type="radio" value="false"/>
                </label>
            </div>
        </span>
    )
}