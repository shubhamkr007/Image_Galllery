import { User, onAuthStateChanged } from "firebase/auth";
import React, { FC, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";


interface AuthContextType{
    user: User | null
    isLoading:boolean
}
export const AuthContext=createContext<AuthContextType>({
    user: null,
    isLoading:false,
})

interface AuthProviderProps{
    children: React.ReactElement
}
export const AuthProvider: FC<AuthProviderProps> =({children})=>{

    const [user,setUser] =useState<User  | null>(null);
    const [isLoading, setIsLoading]=useState<boolean>(true);

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setIsLoading(false)
        })

        return unsubscribe
    },[]);

    const value={
        user, isLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}