import Autehticate from "./Autehticate";
import { IUser } from "./Autehticate";

export default function Login()
{
    function onSubmitClick(data:IUser)
    {
        console.log(data)
    }
    return(
        <div>
            <Autehticate title="Welcome to Login" islogin={false} issignup={true} isusername={false} onSubmitClick1={onSubmitClick}></Autehticate>
        </div>
    )
}