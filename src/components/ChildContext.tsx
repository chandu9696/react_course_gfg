import { useContext } from "react"
import { Context } from "./ContextParent"

export default function ChildContext()
{
    const text1=useContext(Context)
    return(
        <label>{text1}</label>
    )
}