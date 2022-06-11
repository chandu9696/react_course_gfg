import { useEffect, useState } from "react";
import Navigator from "./Navigator";
interface IData
{
  event:string;
}
// interface api_data
// {
//   domains:[]
//   name:string
// }
const Weather = () => {
    const [data,SetData]=useState<IData[]>([])
    // const [data1,SetData1]=useState<api_data[]>([])
    useEffect(()=>
    {
       
        async function api()
        {
            const respose=await fetch('./weather.json')
            const json=await respose.json()
            SetData(json.alert)
            


            //console.log(json.map((x)=>x.category))
          

           

        }
        // async function api2()
        // {
        //     const respose=await fetch('http://universities.hipolabs.com/search?country=United+States')
        //     const json:api_data[]=await respose.json()
        //     SetData1(json)
        //     // console.log(json.map(x=>x.domains))
            


        //     //console.log(json.map((x)=>x.category))
          

           

        // }
        api();
        // api2();
    },[])

  return(
    <>
     {data.map((item,i)=>
    {
      return(
        <div>{item.event}</div>
      )
    })} 
    {console.log(data)}
    {/* {data1.map((item,i)=>
    {
      return(
        <>
        {console.log(item.domains.map(
          (item)=>item
        ))}
        <div>{item.name}</div>
        <div>
        {item.domains.map((item1)=>
        {
          return(
            <div>{item1}</div>
          )
        }
          
        )}
        </div>
        </>

      )
    })} 
     */}

    </>
  );
};

export default Weather;