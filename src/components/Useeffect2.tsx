import { useEffect, useState } from "react";

interface IUrl
{
    url:string;
}
export default function UseEffect2()
{
    const [current,setCurrent]=useState(1);
    const [url,setUrl]=useState<string>('');
    useEffect(()=>
    {
        async function api()
        {
            const respose=await fetch('https://jsonplaceholder.typicode.com/photos/'+current)
            const json:IUrl=await respose.json()
            console.log(json.url)
            setUrl(json.url)
           

        }
        api();
    },[current])
    return(
      <>
         <button onClick={()=>
            {
                if(current===1)
                {setCurrent(5000)
                }
                else{
                    setCurrent(current-1)
                }
            }}>left</button>
        <img src={url} style={{width:'50vw',height:'50vh'}} alt='missing'/>
     
        <button  onClick={()=>{if(current===4999){setCurrent(1)}
        else{setCurrent((current+1)%5000)}
    console.log(current)}}>right</button>
    </>
    )
}