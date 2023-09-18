import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {createContext, useEffect, useState} from "react";

export const Authcontext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = (username, password) => {
        setIsLoading(true)
        axios.post('http://3.26.16.124:8000/users/login', {
            username,
            password
        })
        .then(res => {
            console.log(res.data)
            setUserToken(res.data['access token'])
            if (res && res.data && res.data.access_token){
                AsyncStorage.setItem('userToken', res.data['access token'])
            }
        })
        .catch(e => {
            console.log(`Login error ${e}`)
        }) 
        setIsLoading(false)
    }

    const logout = async () => {
        setIsLoading(true)
        AsyncStorage.removeItem('userToken')
        setUserToken(null);
        setIsLoading(false)
    }

    const isLoggedIn = async() => {
        try{ 
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            setUserToken(userToken)
            setIsLoading(false)
        } catch(e) {
            console.log(`isLogged in error ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])
    return(
        <Authcontext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </Authcontext.Provider>
    )
}