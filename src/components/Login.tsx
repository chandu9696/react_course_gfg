import Autehticate from "./Autehticate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { IUser } from "./Autehticate";
import { auth } from "./SetupFireBase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";

export default function Login()
{
    const navigate=useNavigate();
    const [spin, setspin] = useState<boolean>(false);
    async function onSubmitClick(data:IUser)
    {
        try {
            const cred = await signInWithEmailAndPassword(
              auth,
              data.email,
                data.password
               
            );
            setspin(true)
            
            navigate('/')
            console.log(cred);
          } catch (error:any) {
  
            return(<div id='toast'>{toast.error('error in id')}</div>)
            console.log(error.message);
          }
    }
    return(
        <>
        <div>
        {spin && <LoadingSpinner text="Please Wait"></LoadingSpinner>}
            <Autehticate title="Welcome to Login" islogin={false} issignup={true} isusername={false} onSubmitClick1={onSubmitClick}></Autehticate>
        </div>
       
        </>

    )
}