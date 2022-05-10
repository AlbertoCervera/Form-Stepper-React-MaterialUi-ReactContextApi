import "./Inputs.css"


export default function InputDate(props){
    return(
        <label>
            {props.label}
            <input type="date" name={props.name} onChange={props.onChange} />
        </label>
    )
}