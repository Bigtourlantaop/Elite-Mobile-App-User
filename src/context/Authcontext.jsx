import React, {createContext, useState} from "react";

export const Authcontext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const login = () => {
        setUserToken('ioiojlkad')
        setIsLoading(false)
    }

    const logout = () => {
        setUserToken(null);
        setIsLoading(false)
    }

    return(
        <Authcontext.Provider value={{login, logout}}>
            {children}
        </Authcontext.Provider>
    )
}