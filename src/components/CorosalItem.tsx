import { useState } from "react"

export default function Coursal()
{
    const [current,setCurrent]=useState<number>(0);

    const images=
    [
       'https://cdn.pixabay.com/photo/2021/11/07/16/39/animal-6777185__340.jpg',
       
       'https://rc.jiomeet.com/assets/img/start_a_meeting.svg',
       
       'https://rc.jiomeet.com/assets/img/plan_a_meeting.svg'
     
    ]
    return(
        <>
           <button onClick={()=>
            {
                if(current==0)
                {setCurrent(images.length-1)
                }
                else{
                    setCurrent(current-1)
                }
            }}>left</button>
        <img src={images[current]} style={{width:'50vw',height:'50vh'}}/>
     
        <button  onClick={()=>{setCurrent((current+1)%images.length)
    console.log(current)}}>right</button>
        </>
    )
}