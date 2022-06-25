import { compose } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "./AppState"
import Hotel from "./Hotel"
import './hotel.css'
import { SetFlag } from "./Reducers/FlagForFav"

export default function Fav_Hotel()
{
    const count=useSelector((x:AppState)=>x.hotelfav)
  
    const usedispatch=useDispatch()
    usedispatch(SetFlag(true))
    console.log(count)
    if(count.length)
    return(
      
        <div className="main_hele">
        {count.map((x,i)=> {
        return(
            <>
        <Hotel key={i} {...x}/>
        </>)})}
        
        </div>
    )
    else
    return<>Nothing Here</>
}