import { createContext, useState } from "react"
import ChildContext from "./ChildContext"

export const Context=createContext<string|undefined>('')
export default function ContextParent()
{
    const [text,SetText]=useState<string>('')
    return(
        <Context.Provider value={text}>
            <input type='text' onChange={(e)=>{SetText(e.target.value)}}/>
            <ChildContext/>
        </Context.Provider>
    )

    
}