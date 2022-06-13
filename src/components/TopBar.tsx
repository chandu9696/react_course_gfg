import { AppBar, Button, InputBase } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaSistrix} from "react-icons/fa"
import './TopBar.css'
import { AppState } from "./AppState";
import { useDispatch, useSelector } from "react-redux";
import { setName_ } from "./Reducers/SetSearchTest";

export default function TopBar() {
    const [data, setData] = useState<boolean>(true);
    const usedispatch=useDispatch()
    const search_t=useSelector((x:AppState)=>x.valueset)
    {console.log(search_t)}
    const navigate = useNavigate();
    return (
        
        <AppBar className="app">
          
            {data ? <div className='Nav_Item'>
                 <div className="logo">
                    <img src='https://rc.jiomeet.com/assets/img/website/website_logo_header_light.svg'></img>
                </div> 
                <div className="search_box_head">
                    <FaSistrix></FaSistrix>
                    <InputBase className="search_" placeholder="Find Here" onChange={(e)=>usedispatch(setName_(e.target.value))}></InputBase>
                </div>
                

                <Button className='btn' onClick={() => navigate('/login')}>Login</Button>
                <Button className='btn' onClick={() => navigate('/signup')}>Sign Up</Button>
                <Button className='btn'>Profile</Button>

            </div> : <div className="color_giver">   <div className="logo">
                    <img src='https://rc.jiomeet.com/assets/img/website/website_logo_header_light.svg'></img>
                </div> </div>}

            <button className='hand' onClick={() => { setData(!data) }}><img className="img-hand" src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png'></img></button>

        </AppBar>
    )
}