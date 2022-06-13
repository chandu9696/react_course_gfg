import Autehticate, { IUser } from "./Autehticate";

export default function SignUp()
{
    function onSubmitClick(data:IUser)
    {
        console.log(data)
    }
    return(

        <div>
             <Autehticate title="Welcome to Sign Up"  islogin={true} issignup={false} isusername={true} onSubmitClick1={onSubmitClick}></Autehticate>
        </div>
    )
}