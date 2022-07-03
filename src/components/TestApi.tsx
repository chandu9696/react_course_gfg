import { useEffect, useState } from "react"
import { json } from "stream/consumers"
interface Iuser
{
    name:string
}
export default function TestApi()
{
    const [name,setname]=useState<string>()
    // useEffect(()=>{
    //     async function api()
    //     {
    //     const respose=await fetch("https://nodegfg.herokuapp.com/a")
    //     const json:Iuser=await respose.json()
    //     setname(json.name)
    //     // console.log(json)
    //     }
    //     api()
    // },[])
    function test() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setname(data.title));
    }
    test();
    return(
        <>
        
        <p>This is comming from backend {name}</p>
        </>
    )
}