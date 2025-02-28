import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import React, {createContext, ReactNode, useContext, useEffect, useState } from "react"
import { auth, googleProvider } from "../firebase/setup"

interface AuthContextType{
    user:any,
    loginWithGoggle:()=>Promise<void>,
    logout:()=>Promise<void>
}

const AuthContext = createContext<AuthContextType|undefined>(undefined)

export const AuthProvider  = ({children}:{children:ReactNode})=>{
    const[user,setUser] = useState<any>(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })

        return ()=> unsubscribe()
    },[])


    const loginWithGoggle = async()=>{
        try {
            await signInWithPopup(auth,googleProvider)
        } catch (error) {
            console.log('google sign-in failed',error)
        }
    }

    const logout = async()=>{
        try {
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.log('failed to logOut',error)
        }
    }

    return(
        <AuthContext.Provider value={{user,loginWithGoggle,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('failed to find the context')
    }else{
        return context
    }
}




