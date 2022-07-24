import React, { useState } from "react"

import './NoteTaking.css';
export default function NoteTaking()

{
    const [note,addnote]=useState<string[]>([]);
    const [value,setvalue]=useState<string>("");
    const [searchText,SetsearchText]=useState<string>('')
    const [indexele,setIndex]=useState<number|undefined>()
    const [text,updateText]=useState<string>('')
    const [indexele1,setIndex1]=useState<number|undefined>()
    const [text1,updateText1]=useState<string>('')
    const [fav,fav_list]=useState<string[]>([]);
    function deletefun(index:number,flag:boolean)
    {
        if(flag)
        {
            
        const newlist=[...fav]
        newlist.splice(index,1)
        fav_list(newlist)
        }
        else
        {
    
        const newlist=[...note]
        newlist.splice(index,1)
        addnote(newlist)
        }
        

    }
    function Add_Fav_list(index:number)
    {
        const item=note[index];
        note.splice(index,1)
        const newlist=[...fav,item]
        fav_list(newlist)
        
    }
    function renderList(item:string,index:number):React.ReactNode
    {
        return(
        <div key={index}>
            <div>
                {item}
              
            </div>
            <button onClick={()=>deletefun(index,false)}>delete</button>

            <button onClick={()=>{setIndex(index)
            updateText(item)}}>Update</button>
            <button onClick={()=>Add_Fav_list(index)}>Star</button>
        </div>)
    }
    function onUpdate(index:number)
    {
        const newlist=[...note]
        newlist[index]=text;
        addnote(newlist)
        setIndex(undefined)
        updateText('')
    }
    function onUpdate1(index:number)
    {
        const newlist=[...fav]
        newlist[index]=text1;
        fav_list(newlist)
        setIndex1(undefined)
        updateText1('')
    }
    function renderUpdate(index:number):React.ReactNode
    {
        return(
            <>
            <input type='text' value={text} onChange={(e)=>updateText(e.target.value)}/>
            <button onClick={()=>onUpdate(index)}>Done</button>
            </>
        )
    }
    function renderUpdate1(index:number):React.ReactNode
    {
        return(
            <>
            <input type='text' value={text1} onChange={(e)=>updateText1(e.target.value)}/>
            <button onClick={()=>onUpdate1(index)}>Done</button>
            </>
        )
    }
    function renderFilter(listItem:string,index:number):React.ReactNode
    {
        
        if(listItem.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        {
            if(listItem==='')
            return
        
            return indexele===index ? renderUpdate(index):renderList(listItem,index);
        }
        return;
        
    }
    function renderFilter1(listItem:string,index:number):React.ReactNode
    {
        
        if(listItem.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        {
            if(listItem==='')
            return
            return indexele1===index ? renderUpdate1(index):renderfav(listItem,index);
        }
        return;
        
    }
    function renderfav(item:string,index:number):React.ReactNode
    {
        return(
        <div key={index}>
            <div>
                {item}
              
            </div>
            <button onClick={()=>deletefun(index,true)}>delete</button>
            <button onClick={()=>{setIndex1(index)
            updateText1(item)}}>Update</button>

            <button disabled={true}>Star</button>
        </div>)
    }
    return(
       <div className="main">
        <div className="controls">
        <div>
     
        <input type='text'placeholder='Add Item' onChange={e=>setvalue(e.target.value)}></input>

      
        <button onClick={()=>addnote([...note,value])}>Add</button>
        </div>
        <div className="search_text">
            <label>Search Here</label>
        <input type='text' value={searchText} placeholder='Search Item' onChange={(e)=>SetsearchText(e.target.value)}></input>

        </div>
        </div>
        
        <div className="display_area">
        {fav.map(renderFilter1)}
    
        {note.map(renderFilter)}
        </div>
       </div>
    )
}