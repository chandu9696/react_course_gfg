import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { Ihotel } from "./Reducers/HotelsSlice";
import './HotelDetails.css'
import { Fab } from "@mui/material";
import { toast } from "react-toastify";

export default function HotelDetails()
{
    const [cusine,setcusine]=useState<string[]>();
    const userParams = useParams<{ hotelID: string }>();
    const navigate=useNavigate();
    const [data,Setdata]=useState<Ihotel>();
    // console.log(userParams.hotelID)
    useEffect(()=>{
        async function api()
        {
        const respose=await fetch(`https://nodegfg.herokuapp.com/${userParams.hotelID}`)
        const json:Ihotel= await respose.json()
        Setdata(json)
        const str=json.cuisines;
        const new_str=str.split(",");
        setcusine(new_str)
        console.log(json)
        console.log('test')
        }
        api();
    },[])
    return(
        <div className="main_detail">
        <h1>Welcome to {data?.name}</h1>
        {/* <h2>Creatting call with respect to Hotel Id's</h2> */}
        <img src={data?.featured_image}/>
        <div>
        <div className="cusines">
            <h4>Our Specility:</h4>
          
            {cusine?.map((item)=>{
                return(
                  
                    <p>{item}</p>
                   
                )
            })}
             </div>
        </div>
        <div className="btn_main">
        <Fab variant="extended" className="btn_detail" onClick={()=>toast.success('comming soon')}>Book Your Order</Fab>
        <Fab variant="extended" className="btn_detail" onClick={()=>navigate('/')}>Home</Fab>
        </div>
        {/* <p>{userParams.hotelID}</p> */}
        </div>
    )
}