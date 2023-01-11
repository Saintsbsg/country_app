import { createContext, useState } from "react";

export const RegionContext = createContext();

export const RegionContextProvider = ({children}) =>{
    const [region, setRegion] = useState('default');

    return(
        <RegionContext.Provider value={{region, setRegion}}>
            {children}
        </RegionContext.Provider>
    )
}