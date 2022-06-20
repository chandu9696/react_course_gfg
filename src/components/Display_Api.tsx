import { useEffect } from "react";

export default function Display_Api()
{
    useEffect(()=>{
        async function api()
        {
            const response= await fetch('https://nodegfg.herokuapp.com/https://example.com/a')
            const jason=response.json()
            console.log(jason)
        }
       api()
    },[])
    return(
        <div>
    hello
        </div>

    )
}