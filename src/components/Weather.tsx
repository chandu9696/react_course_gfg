import { useEffect, useState } from "react";
import Navigator from "./Navigator";
interface IData
{
    alert:[]
}
const Weather = () => {
    const [data,SetData]=useState<IData[]>()
    useEffect(()=>
    {
       
        async function api()
        {
            const respose=await fetch('./weather.json')
            const json:IData=await respose.json()
            SetData(json.alert)
            


            //console.log(json.map((x)=>x.category))
          

           

        }
        api();
    },[])

  return(
    <>
    <h1>Hello kartu</h1>
    <img src='https://m.media-amazon.com/images/I/71cFxsy+BCL._SX679_.jpg'></img>
    {console.log(data)}

    </>
  );
};

export default Weather;