import { Fab, TextField, Typography } from "@mui/material"
import './Auth.css';

interface IAuticate
{
    title:string
}
export default function Autehticate(props:IAuticate)
{
    return(
        <div className="outer_box">
            <div className="inner_box">
        <Typography variant="h5">{props.title}</Typography>
        <TextField variant="outlined" placeholder='UserName'></TextField>
        <TextField variant="outlined" placeholder='Email'></TextField>
        <TextField variant="outlined" placeholder='Password'></TextField>
        <div className="btn_pro">
        <Fab color='primary' variant="extended">Submit</Fab>
        <Fab color='secondary' variant="extended">Reset</Fab>
        <Fab variant="extended">Login</Fab>
        <Fab variant="extended">Sign up</Fab>
        <Fab variant="extended">Home</Fab>
        
        </div>
        </div>
        </div>
    )
}