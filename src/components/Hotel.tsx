import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Ihotel } from "./Reducers/HotelsSlice";
import './hotel.css'
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { setHotelFav } from "./Reducers/SetFavHotel";
import { useContext } from "react";
import { Context } from "./ContextParent";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// name:string,
// id:string,
// cuisines:string,
// featured_image:string

export default function Hotel(props:Ihotel)
{
    const usedispatch=useDispatch()
    const navigate = useNavigate();
    const flag=useSelector((x:AppState)=>x.flagfavset.flag)
    const count=useSelector((x:AppState)=>x.hotelfav)
    const user=useContext(Context)
    {console.log(props.id)}
    {console.log(count)}
    return(
    
    <div className="hotel_main">
        <Card className="too">
           
            <CardMedia className='img1' image={props.featured_image}></CardMedia>
            <CardContent>
             <Typography variant="h5">{props.name}</Typography>
             <Typography variant="body2">{props.cuisines}</Typography>
          
            </CardContent>
         
         <button className="btn1" disabled={flag} onClick={()=>{
            
            if(!user)
            {
                navigate('/login')
                toast.error("You need to Sign in first")
            }
            else
            {

            if(!count.includes(props))
            usedispatch(setHotelFav(props))
            }
        
        
        
        
        }}>
            
            
            
            Star</button>
            <Link to={`/${props.id}`}>
                <button  className="btn2" onClick={()=>{
                // navigate(`${props.id}`)
                toast.success("Comming Soon stay tuned!!", { autoClose: 2000 })
            }}> Visit</button>
            </Link>
         
        </Card>
     
        </div>
 
    )
}