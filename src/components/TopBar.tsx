import { AppBar, Button, InputBase } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
import './TopBar.css'

export default function TopBar()
{
    const [data,setData]=useState<boolean>(true);
    const navigate = useNavigate();
    return(
        <AppBar className="app">
            {data? <div className='Nav_Item'>

<InputBase className="search_" placeholder="Find Here"></InputBase>

<Button className='btn' onClick={()=>navigate('/login')}>Login</Button>
<Button  className='btn'onClick={()=>navigate('/signup')}>Sign Up</Button>
<Button  className='btn'>Profile</Button>

</div>:<div className="color_giver"></div>}
           
            <button className='hand' onClick={()=>{setData(!data)}}><img className="img-hand" src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png'></img></button>
           
        </AppBar>
    )
}