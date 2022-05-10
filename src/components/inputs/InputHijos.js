import "../CardForm.css"
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";



function HijosGenerator(props){
    const {hijos}= useContext(DataContext)
    const [numHijos] = hijos

    let inputs=[]
    for (let index = 1; index-1 < numHijos; index++) {
        inputs.push(<label key={index}> {"Edad Hija/o "+index} <input key={index} type="number" name={"hijo" + index} min="1" max="70" onChange={props.onChange} /></label>)
        
    }
    return(inputs)

}


export default function InputHijos(props) {
    const {hijos}= useContext(DataContext)
    const [numHijos,setNumHijos] = hijos

    return(
       <div className="InputHijos">
           <label>Nº de Hijas/os
                <input type="number" value={numHijos} onChange={(e)=> setNumHijos(e.target.value)} min="0" max="5"/>
           </label>
            <HijosGenerator onChange={props.onChange}/>
       </div>
    )
}