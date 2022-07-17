import { useEffect, useState } from "react";

import { api2 } from "./Api";
interface IUsers
{
    username:string;
}
export default function UseEffect1()
{
    const [userName,setUsername]=useState<string[]>([]);
    useEffect(()=>
    {
        // async function api()
        // {
        //     const respose=await fetch('https://jsonplaceholder.typicode.com/users')
        //     const jason:IUsers[]=await respose.json()
        //     setUsername(jason.map((x)=>x.username))

        // }
        async function getName(){
        const json:IUsers[]=await api2()
        setUsername(json.map((x)=>x.username))
        }
        getName();
    },[])
    return(
        <>
        <h1>Fetching FirstName Here</h1>
      {userName.map((item,i)=>{
          return(
          <div key={i}>
              <p data-testid="output">{item}</p>

          </div>

        )})}
        </>
    )
}