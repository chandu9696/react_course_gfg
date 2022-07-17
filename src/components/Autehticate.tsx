import { Fab,TextField, Typography } from "@mui/material"


import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './Auth.css';

interface IAuticate
{
    title:string
    issignup:boolean,
    islogin:boolean,
    isusername:boolean,
    onSubmitClick1:(data:IUser)=>Promise<string>
}
export interface IUser
{
    name:string,
    email:string,
    password:string
}

export default function Autehticate(props:IAuticate)
{
    
    const navigate=useNavigate();
    const [message,Setmessage]=useState<string>('');
   async function onSubmitClick1(data:IUser)
    {
      const message1=await props.onSubmitClick1(data)
      if(message1)
      Setmessage(message1)
    }
    const {register,handleSubmit,reset,formState:{errors}}=useForm<IUser>()
    return(
        <form onSubmit={handleSubmit(onSubmitClick1)}>
        <div className="outer_box">
            <div className="inner_box">
        <Typography variant="h5">{props.title}</Typography>
       { props.isusername && <TextField variant="outlined" placeholder='UserName' required
        error={errors?.name?.message!==undefined}
        data-testid="username"
        helperText={errors?.name?.message}
        
        {...register("name",
        {
            required:true,
            minLength:{value:4,message:"Name Must be of four charters"}

        })}></TextField>}
        <TextField variant="outlined" placeholder='Email'  data-testid="email" required {...register("email")}></TextField>
        <TextField variant="outlined" placeholder='Password' type='password' 
        error={errors?.password?.message!==undefined}
        data-testid="password"
        helperText={errors?.password?.message}
         {...register("password",
         {
        required:true,
        minLength:{value:6,message:"Name Must be of 6 charters"}

     })}></TextField>
      {message &&   <Typography variant="h6" className='error' data-testid='error_message'>{message}</Typography>}
        <div className="btn_pro">
        <Fab color='primary' variant="extended" type='submit'>Submit</Fab>
        <Fab color='secondary' variant="extended" onClick={()=>reset()}>Reset</Fab>
        {props.islogin && <Fab variant="extended" onClick={()=>navigate('/login')}>Login</Fab>}
        {props.issignup && <Fab variant="extended" onClick={()=>navigate('/signup')}>Sign up</Fab>}
        <Fab variant="extended" onClick={()=>navigate('/')}>Home</Fab>
        
        </div>
        </div>
        </div>
        </form>
    )
}

