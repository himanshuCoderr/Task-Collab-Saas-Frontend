import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

let UserContext = createContext()

let UserProvider = ({children}) =>{
    let [user, setUser] = useState({
        username: "fancy_thunder",
        email: "avi.aakash4u@gmail.com"
    })

    let [loginStatus, setLoginStatus] = useState(false)
    
   
    return <UserContext.Provider value = {{user,setUser , loginStatus , setLoginStatus}}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}