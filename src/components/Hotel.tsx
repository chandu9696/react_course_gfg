import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Ihotel } from "./Reducers/HotelsSlice";
import './hotel.css'
// name:string,
// id:string,
// cuisines:string,
// featured_image:string

export default function Hotel(props:Ihotel)
{
    return(
    <div>
        <Card className="too">
            <CardMedia className='img1' image={props.featured_image}></CardMedia>
            <CardContent>
             <Typography variant="h5">{props.name}</Typography>
             <Typography variant="body2">{props.cuisines}</Typography>
            </CardContent>
            
        </Card>
        </div>
 
    )
}