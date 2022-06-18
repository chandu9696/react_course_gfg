import { Fab, Typography } from "@mui/material";
import { Auth, signOut, updateProfile } from "firebase/auth";
import { userInfo } from "os";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./ContextParent";
import { auth } from "./SetupFireBase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import './Profile.css'
export default function Profile()
{
    const user=useContext(Context)
    const navigate=useNavigate();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
    const storage = getStorage();
    function handleChange(e:any) {
      if (e.target.files[0]) {
        setPhoto(e.target.files[0])
      }
    }
    async function upload(file:any, user:any) {
        const fileRef = ref(storage, user.uid + '.jpg');
      
        // setLoading(true);
        
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
      
        updateProfile(user, {photoURL:photoURL});
       
        setLoading(false);
        alert("Uploaded file!");
      }
  
    function handleClick() {
      upload(photo, user);
    //   if (user?.photoURL) {
    //     setPhotoURL(user.photoURL);
    //   }
    }
    useEffect(() => {
      if (user?.photoURL) {
        setPhotoURL(user.photoURL);
      }
     }, [user])
  const logout = async () => {
    await signOut(auth);
    navigate('/')
  }
    if(user)
    {
         {console.log(photoURL)} 
        return(
            <div className="profile_main">
                   <Typography variant='h5'>Welcome to Profile page</Typography>
                 <Typography variant="h5">{user.displayName}</Typography>
                 <Typography variant='h5'>{user.email}</Typography>
                 <Typography variant='h5'>{user.uid}</Typography>
                 <Fab variant="extended" onClick={()=>logout()}>SignOut</Fab>
                 <Fab variant="extended" onClick={()=>navigate('/')}>Home</Fab>
                 <input type="file" onChange={(e)=>{handleChange(e)}} />
                 <button disabled={!photo} onClick={()=>{handleClick()}}>Upload</button>
                
                <img src={photoURL} alt="Avatar" className="avatar" />
            </div>
        )
    }
    else
    {
       return <></>
    }
}