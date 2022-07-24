import { useEffect, useState } from "react";

import { api } from "./Api";


export default function ApiTest()
{
    const [userName,setUsername]=useState<string>('');
    useEffect(()=>
    {
        // async function api()
        // {
        //     const respose=await fetch('https://jsonplaceholder.typicode.com/users')
        //     const jason=await respose.json()
        //     setUsername(jason[0].name)

        // }
        async function getName()
        {
        const name1=await api()
        setUsername(name1)
        }
        // setName(name1))
        getName()
    },[])
    return(
        <label data-testid='output'>{userName}</label>

    )
}