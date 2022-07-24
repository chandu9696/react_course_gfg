import { useState } from "react"

export default function SimpleJest()
{
    const [name,Setname]=useState<string>('');
    return(
        <>
        <input type='text' onChange={(e)=>Setname(e.target.value)} data-testid='input'></input>
        <label data-testid='output' id='4'>{name}</label>

        </>
    )
}