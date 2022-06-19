import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Ihotel } from "./Reducers/HotelsSlice";
import './hotel.css'
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { setHotelFav } from "./Reducers/SetFavHotel";
// name:string,
// id:string,
// cuisines:string,
// featured_image:string

export default function Hotel(props:Ihotel)
{
    const usedispatch=useDispatch()

    const count=useSelector((x:AppState)=>x.hotelfav)
    {console.log(count)}
    return(
    <div className="hotel_main">
        <Card className="too">
            <CardMedia className='img1' image={props.featured_image}></CardMedia>
            <CardContent>
             <Typography variant="h5">{props.name}</Typography>
             <Typography variant="body2">{props.cuisines}</Typography>
          
            </CardContent>
         {<button className="btn1" onClick={()=>{usedispatch(setHotelFav(props))}}>Star</button>}
         
        </Card>
     
        </div>
 
    )
}