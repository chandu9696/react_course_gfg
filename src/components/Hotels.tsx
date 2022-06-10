import { count } from "console";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Interface } from "readline";
import { AppState } from "./AppState";
import { Ihotel, setHotel } from "./Reducers/HotelsSlice";
import Hotel from "./Hotel";



export default function Hotels()
{
    const usedispatch=useDispatch()
        const count=useSelector((x:AppState)=>x.hotelslice)
        
    useEffect(()=>
    {
       
        async function api()
        {
            const respose=await fetch('./hotel.json')
            const json:{restaurant:Ihotel}[]=await respose.json()
            usedispatch(setHotel(json.map((x)=>x.restaurant)))

            //console.log(json.map((x)=>x.restaurant))
          

           

        }
        api();
    },[])
    return(
      <>
        {/* {console.log(count)}
      <p>{count.length}</p>
       <p>hello</p> */}
         <div className="main_hele">
      {count.map((x,i)=> <Hotel key={i} {...x}/>)}
    </div>
    </>
    )
}