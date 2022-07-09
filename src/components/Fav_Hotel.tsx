import { compose } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "./AppState"
import Hotel from "./Hotel"
import './hotel.css'
import { SetFlag } from "./Reducers/FlagForFav"
import { setName_ } from "./Reducers/SetSearchTest"
import TopBar from "./TopBar"

export default function Fav_Hotel()
{
    const count=useSelector((x:AppState)=>x.hotelfav)
    const usedispatch=useDispatch()
    usedispatch(SetFlag(true))
    const search_t=useSelector((x:AppState)=>x.valueset)
    console.log(count)
    
  
    useEffect(() => {
        // Specify how to clean up after this effect:
        return function cleanup() {
            usedispatch(setName_("")); // Reset state here
        }
      },[]);
    if(count.length)
    return(
        <>
        <TopBar/>
       
        <div className="main_hele">
        {count.map((x,i)=> {
        if(x.name.toLocaleLowerCase().includes(search_t.name.toLocaleLowerCase()))
        return(
          
            <>
        <Hotel key={i} {...x}/>
        </>)})}
        
        </div>
        </>
    )
    else
    return<>Nothing Here</>
}