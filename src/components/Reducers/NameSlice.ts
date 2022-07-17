import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Iname
{
    name:string
}

const NameSlice=createSlice(
    {
        name:'kuch_bhi',
        initialState:{name:''},
        reducers:{
            setName(state:Iname,newName:PayloadAction<string>)
            {
                state.name=newName.payload;
            }
        }

    }
)

export const {setName}=NameSlice.actions;

export default NameSlice.reducer;