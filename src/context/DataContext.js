import { createContext, useState } from "react";

const DefaultGlobalData = {
    nombre: "",
    nacionalidad : "",
    sexo: "",
    fecha: "",
    discapacidad:"",
    formaParteOrgano: "",
    nivelEstudios: "", 
    responsabilidadFamiliar: "",
    nivelAccesoPuesto: "",
    nHijos: 0,
    edadHijos:[],

}

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [step,setStep] = useState(0)

    const [numHijos,setNumHijos] = useState(3)

    const [globalData,setGlobalData] = useState({})

    return(
        <DataContext.Provider value={{steps:[step,setStep],hijos:[numHijos,setNumHijos], global:[globalData,setGlobalData]}}>
            {children}
        </DataContext.Provider>
    )
}