import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Inumber
{
    flag:boolean;
}

const FlagForFav=createSlice(
    {
        name:'kuch_bhi1',
        initialState:{flag:false},
        reducers:{
            SetFlag(state:Inumber,payload:PayloadAction<boolean>)
            {
                state.flag=payload.payload
            }
        }

    }
)
export const {SetFlag}=FlagForFav.actions;

export default FlagForFav.reducer;