import { useSelector } from "react-redux"
import { AppState } from "./AppState"
import Hotel from "./Hotel"
import './hotel.css'

export default function Fav_Hotel()
{
    const count=useSelector((x:AppState)=>x.hotelfav)
    return(
        <div className="main_hele">
        {count.map((x,i)=> {
        return(
            <>
        <Hotel key={i} {...x}/>
        </>)})}
        </div>
    )
}