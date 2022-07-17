
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "./AppState"
import Hotel from "./Hotel"
import './hotel.css'
import './Fav_Hotel.css'
import { SetFlag } from "./Reducers/FlagForFav"
import { setName_ } from "./Reducers/SetSearchTest"
import TopBar from "./TopBar"

export default function FavHotel()
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
      },[usedispatch]);
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
    return( < >
        <TopBar/>
        <div className="main_nothing_fav">
        <h1>Please add fav hotels to show here</h1>
        </div>
        </> )
}