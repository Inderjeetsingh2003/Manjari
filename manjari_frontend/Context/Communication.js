import { createContext, useState } from "react";

 export const Communicationcontext =createContext()

export const Communicationprovider=(prop)=>
{
const[WordToSpeak,SetWordToSpeak]=useState([])
 return (
    <Communicationcontext.Provider value ={{WordToSpeak,SetWordToSpeak}}>
        {prop.children}
    </Communicationcontext.Provider>
 )
}