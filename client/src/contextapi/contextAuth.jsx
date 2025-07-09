
// import { json } from "express";
import { useState,useEffect,createContext,useContext } from "react";

const AuthContext = createContext();



const AuthProvider =({children})=>{
const[Auth, SetAuth]= useState({
    user:null,
    jwttoken :''
});
useEffect(()=>{
    const data = localStorage.getItem('auth')
    if(data){
        const parsedata = JSON.parse(data)
        SetAuth({
             ...Auth,
            user:parsedata.user,
            jwttoken :parsedata.jwttoken 
        })
    }
    //eslint-disable-next-line
},[] )
return(
<AuthContext.Provider value={[Auth,SetAuth]}>
    {children}
</AuthContext.Provider>
)

}

//create custom hook

const useAuth = () => useContext(AuthContext);


export {useAuth,AuthProvider}