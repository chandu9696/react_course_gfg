import { count } from "console";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Interface } from "readline";
import { AppState } from "./AppState";
import { fetchHotel, Ihotel } from "./Reducers/HotelsSlice";
import Hotel from "./Hotel";
import TopBar from "./TopBar";
import { SetFlag } from "./Reducers/FlagForFav";



export default function Hotels()
{
    const usedispatch=useDispatch()
    const count=useSelector((x:AppState)=>x.hotelslice)
    const search_t=useSelector((x:AppState)=>x.valueset)
    usedispatch(SetFlag(false))
    useEffect(()=>
    {
       
        async function api()
        {
          
          usedispatch(fetchHotel())
            // const respose=await fetch('./hotel.json')
            // const json:{restaurant:Ihotel}[]=await respose.json()
            // usedispatch(setHotel(json.map((x)=>x.restaurant)))

            //console.log(json.map((x)=>x.restaurant))
          

           

        }
        api();
    },[])
    return(
      <div>
        {/* {console.log(count)}
      <p>{count.length}</p>
       <p>hello</p> */}
       <TopBar/>
       
      <div className="main_hele">
      {count.map((x,i)=> {
          {console.log(search_t.name)}
      if(x.name.toLocaleLowerCase().includes(search_t.name.toLocaleLowerCase()))
      return(
        <>
      
      
      <Hotel key={i} {...x}/>
      </>
      )})}
    </div>
    </div>
    )
}