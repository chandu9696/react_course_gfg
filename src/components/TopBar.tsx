import { AppBar, Button, InputBase } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaSistrix} from "react-icons/fa"
import './TopBar.css'
import { AppState } from "./AppState";
import { useDispatch, useSelector } from "react-redux";
import { setName_ } from "./Reducers/SetSearchTest";
import { Context } from "./ContextParent";

export default function TopBar() {
    const [data, setData] = useState<boolean>(false);
    const usedispatch=useDispatch()
    const user=useContext(Context)
   
    const navigate = useNavigate();
    const onlynav=<div className="color_giver">   <div className="logo">
    <img src='https://rc.jiomeet.com/assets/img/website/website_logo_header_light.svg'></img>
</div> </div>

const actualnav= <div className='Nav_Item'>
<div className="logo">
   <img src='https://rc.jiomeet.com/assets/img/website/website_logo_header_light.svg'></img>
</div> 
<div className="search_box_head">
   <FaSistrix></FaSistrix>
   <InputBase className="search_" placeholder="Find Here" onChange={(e)=>usedispatch(setName_(e.target.value))}></InputBase>
</div>


{ !user && <Button className='btn' onClick={() => navigate('/login')}>Login</Button>}
{!user && <Button className='btn' onClick={() => navigate('/signup')}>Sign Up</Button>}
{user &&<Button className='btn' onClick={() => navigate('/favhotel')}>My Fav</Button>}
{user &&<Button className='btn' onClick={() => navigate('/profile')}>Profile</Button>}

</div>
    return (
        
        <AppBar className="app">
          {/* Here we created extra 2 div to make it responsive  */}
          <div className="nav_adjust_2">
          {actualnav}
          </div>
            
            <div className="nav_adjust">
            {!data ?  onlynav:actualnav}
            </div>

            <button className='hand' onClick={() => { setData(!data) }}><img className="img-hand" src='https://prestage.jioevents.com/assets/img/website/swap-me@2x.png'></img></button>

        </AppBar>
    )
}