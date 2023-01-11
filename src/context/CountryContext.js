import { createContext, useState } from "react";

export const CountryContext = createContext();

export const CountryContextProvider = ({children}) =>{
    const [country, setCountry] = useState('');

    return(
        <CountryContext.Provider value={{country, setCountry}}>
            {children}
        </CountryContext.Provider>
    )
}