import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import { YOURAPI } from "../constants/editendpoint";

export const Authcontext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (username, password) => {
        setIsLoading(true)
        axios.post(`http://${YOURAPI}/users/login`, {
            username,
            password
        })
        .then(res => {
            console.log(res.data)
            setUserToken(res.data['access token'])
            setUserInfo(res.data['data'])
            if (res && res.data && res.data['access token'] && res.data['data']){
                AsyncStorage.setItem('userToken', res.data['access token'])
                AsyncStorage.setItem('userInfo', JSON.stringify(res.data['data'])) 
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
        AsyncStorage.removeItem('userInfo')
        setUserToken(null);
        setUserInfo(null);
        setIsLoading(false)
    }

    const isLoggedIn = async() => {
        try{ 
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = await AsyncStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)
            if (userInfo) {
                setUserToken(userToken)
                setUserInfo(userInfo)
            }
            setIsLoading(false)
        } catch(e) {
            console.log(`isLogged in error ${e}`)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])
    return(
        <Authcontext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
            {children}
        </Authcontext.Provider>
    )
}