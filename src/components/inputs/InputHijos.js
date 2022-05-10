import "../CardForm.css"
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";



function HijosGenerator(){
    const {hijos}= useContext(DataContext)
    const [numHijos] = hijos

    let inputs=[]
    for (let index = 1; index-1 < numHijos; index++) {
        inputs.push(<label> {"Hija/o "+index} <input type="number" name={"hijo" + index} min="1" max="70" /></label>)
        
    }
    return(inputs)

}


export default function InputHijos() {
    const {hijos}= useContext(DataContext)
    const [numHijos,setNumHijos] = hijos

    return(
       <div className="InputHijos">
           <label>Nº de Hijas/os
                <input type="number" value={numHijos} onChange={(e)=> setNumHijos(e.target.value)} min="0" max="5"/>
           </label>
            <HijosGenerator/>
       </div>
    )
}