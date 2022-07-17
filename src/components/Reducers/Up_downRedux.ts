import { createSlice} from "@reduxjs/toolkit"

interface Inumber
{
    count:number;
}

const Up_down=createSlice(
    {
        name:'kuch_bhi1',
        initialState:{count:0},
        reducers:{
            SetCountI(state:Inumber)
            {
                state.count=state.count+1;
            },
            SetCountD(state:Inumber)
            {
                state.count=state.count-1;
            }
        }

    }
)

export const {SetCountI,SetCountD}=Up_down.actions;

export default Up_down.reducer;