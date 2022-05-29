import { useEffect, useState } from "react";
import { Interface } from "readline";
interface IUsers
{
    username:string;
}
export default function UseEffect1()
{
    const [userName,setUsername]=useState<string[]>([]);
    useEffect(()=>
    {
        async function api()
        {
            const respose=await fetch('https://jsonplaceholder.typicode.com/users')
            const jason:IUsers[]=await respose.json()
            setUsername(jason.map((x)=>x.username))

        }
        api();
    },[])
    return(
        <>
        <h1>Fetching FirstName Here</h1>
      {userName.map((item,i)=>{
          return(
          <div key={i}>
              <p>{item}</p>

          </div>

        )})}
        </>
    )
}