import { useState } from "react"
import './NoteTaking.css';
export default function NoteTaking()

{
    const [note,addnote]=useState<string[]>([]);
    const [value,setvalue]=useState<string>("");
    return(
       <div className="main">
        <div className="btns">

     
        <textarea onChange={e=>setvalue(e.target.value)}></textarea>
        <div className="btn2">

      
        <button onClick={()=>addnote([...note,value])}>Add</button>
        </div>
        </div>
        <div className="display_area">

        
        {note.map((x,i)=><div key={i}>{x}</div>)}
        </div>
       </div>
    )
}