import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Autehticate, { IUser } from "./Autehticate";
import { auth } from "./SetupFireBase";

export default function SignUp()
{
    const navigate=useNavigate();
    async function onSubmitClick(data:IUser)
    {
        try {
            const cred = await createUserWithEmailAndPassword(
              auth,
              data.email,
                data.password
               
            );
            // cred.user.photoURL
            updateProfile(cred.user,{displayName:data.name})
            navigate('/')
            console.log(cred);
          } catch (error:any) {
            console.log(error.message);
          }
    }
    
    return(

        <div>
             <Autehticate title="Welcome to Sign Up"  islogin={true} issignup={false} isusername={true} onSubmitClick1={onSubmitClick}></Autehticate>
        </div>
    )
}