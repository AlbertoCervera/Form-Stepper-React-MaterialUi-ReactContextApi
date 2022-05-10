import "./Inputs.css"


export default function InputText(props){
    return(
        <label>
            {props.label}
            <input type="text" name={props.name} onChange={props.onChange} value={props.value}/>
        </label>
    )
}