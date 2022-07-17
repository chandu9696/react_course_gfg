import React, { useEffect, useState } from "react";

import './useEffect3.css'
import { api3 } from "./Api";
interface IUrl
{
    id:number,email:string,first_name:string,last_name:string,avatar:string}
export default function UseEffect3()
{
    const [page,setPage]=useState(1);
    const [username,setUsername]=useState<IUrl[]>([]);
    const [search,SetsearchText]=useState<string>('')
   
   
    useEffect(()=>
    {
     async function getapi(){
        const json=await api3()
        setUsername(json)
        }
        getapi();
    },[page])
    function renderName(user:IUrl)
    {
            const seach_string=user.first_name+user.last_name
        
            if(seach_string.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            {
                return(
            <div className='single_user'>

            <img src={user.avatar} alt='any'></img>
            <p data-testid='output'>{user.first_name} {user.last_name}</p>
            </div>)
            }
            return;
          
     
    }
    function SortFUser()
    {
        let clone=[...username]

        clone=clone.sort((x,y)=>x.first_name.localeCompare(y.first_name))
        setUsername(clone)
    }
    function SortLUser()
    {
        let clone=[...username]

        clone=clone.sort((x,y)=>x.last_name.localeCompare(y.last_name))
        setUsername(clone)
    }
    return(
      <div className="container">
          <div className="controls">
            <div>
                <button onClick={()=>
                setPage(1)
                }>page1</button> 
            </div>
         <div>
            <button onClick={()=>
                setPage(2)
            }>page2</button>
          </div>
          <div>
                <button onClick={()=>
            SortFUser()
            }>SortByFirst</button>
        </div>
        <div>
                <button onClick={()=>
            SortLUser()
            }>SortByLast</button>
        </div>
      
        <div className="search_box">
        <label>Search Here</label>
        <input type='text' onChange={(e)=>SetsearchText(e.target.value)}></input>

        </div>
        
         
        </div>
        <div className='user_info'>
      
            {
             
            username.map(renderName)
          
            }
          </div>
            
     </div>
    
    )
}


