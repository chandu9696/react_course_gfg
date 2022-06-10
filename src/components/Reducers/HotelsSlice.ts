import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Ihotel
{
    name:string,
    id:string,
    cuisines:string,
    featured_image:string
}


const HotelSlice=createSlice(
    {
        name:'kuch_bhi',
        initialState:Array<Ihotel>(),
        reducers:{
            setHotel(state:Ihotel[],payload:PayloadAction<Ihotel[]>)
            {
                return payload.payload;
            }
        }

    }
)

export const {setHotel}=HotelSlice.actions;

export default HotelSlice.reducer;