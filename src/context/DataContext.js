import { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [step,setStep] = useState(0)



    return(
        <DataContext.Provider value={{steps:[step,setStep]}}>
            {children}
        </DataContext.Provider>
    )
}