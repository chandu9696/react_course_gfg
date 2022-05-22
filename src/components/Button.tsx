interface test
{
    text:string;
    class:string;
   
   
}


function Button(props:test)
{
    return(
        <button className={props.class} >{props.text}</button>
    )
}



export default Button;