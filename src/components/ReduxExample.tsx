import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { setName } from "./Reducers/NameSlice";
import { SetCountI } from "./Reducers/Up_downRedux";
import { SetCountD } from "./Reducers/Up_downRedux";

export default function ReduxExample()
{
    const usedispatch=useDispatch()
    const value=useSelector((x:AppState)=>x.nameslice.name)
    const count=useSelector((x:AppState)=>x.updown.count)

    return(
        <>
        <input type='text' onChange={(e)=>usedispatch(setName(e.target.value))}/>
        <label> {value}</label>
        <button onClick={()=>{
            usedispatch(SetCountI())
        }}>+</button>
          <p>{count}</p>
          <button onClick={()=>{
            usedispatch(SetCountD())
        }}>-</button>
      

        </>
    )

}