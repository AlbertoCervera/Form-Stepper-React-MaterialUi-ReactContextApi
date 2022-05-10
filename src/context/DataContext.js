import { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [step,setStep] = useState(0)

    const [numHijos,setNumHijos] = useState(3)


    return(
        <DataContext.Provider value={{steps:[step,setStep],hijos:[numHijos,setNumHijos]}}>
            {children}
        </DataContext.Provider>
    )
}