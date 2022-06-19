import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Ihotel } from "./HotelsSlice";

const SetFavHotel=createSlice(
    {
        name:'kuch_bhi4',
        initialState:Array<Ihotel>(),
        reducers:{
            setHotelFav(state:Ihotel[],payload:PayloadAction<Ihotel>)
            {
                return [...state,payload.payload]
            }
        }

    }
)

export const {setHotelFav}=SetFavHotel.actions;

export default SetFavHotel.reducer;