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
        console.log(e.target.files[0])
      }
    }
    async function upload(file:any, user:any) {
        const fileRef = ref(storage, user.uid + '.jpg');
      
        // setLoading(true);
        
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
     
        if (user?.photoURL) {
            setPhotoURL(user.photoURL);
         }
         {console.log(photoURL)} 
        updateProfile(user, {photoURL:photoURL});
   
       
        setLoading(false);
        alert("Uploaded file!");
      }
  
    function handleClick() {
      upload(photo, user);
      
    }
    useEffect(() => {
      if (user?.photoURL) {
        {console.log(photoURL)} 
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
         {console.log(photo)}
        return(
            <div className="profile_main">
                <div className="inside_profile">
                
                <Typography variant='h5'>Welcome to Profile page</Typography>
                <div className='name'>
                  <Typography variant="h6">Name:</Typography>
                 <Typography variant="h6">{user.displayName}</Typography>
                 </div>
                 <div className='email'>
                  <Typography variant="h6">Login Email:</Typography>
                 <Typography variant="h6">{user.email}</Typography>
                 </div>
                 <label htmlFor="files" className="btn1">Select Profile Photo</label>
                <input id="files" type="file" onChange={(e)=>{handleChange(e)}}/>
             
                 <button disabled={!photo} onClick={()=>{handleClick()}}>Upload</button>
                
                <img src={photoURL} alt="Avatar" className="avatar" />
                 <div className="btn">
                 <Fab variant="extended" onClick={()=>navigate('/')}>Home</Fab>
                 <Fab variant="extended" onClick={()=>logout()}>SignOut</Fab>
                
                 </div>
              
                </div>
            </div>
        )
    }
    else
    {
       return <></>
    }
}