import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

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
            // setHotel(state:Ihotel[],payload:PayloadAction<Ihotel[]>)
            // {
            //     return payload.payload;
            // }
        },
        extraReducers: (builder) => {
            builder
                
                .addCase(fetchHotel.fulfilled, (state, action) => {
                    return state = action.payload;
                   
                })
                
        }

    }
)

// export const {setHotel}=HotelSlice.actions;

export default HotelSlice.reducer;
export const fetchHotel:any =createAsyncThunk('products/fetch', async () => {
    const respose=await fetch('https://nodegfg.herokuapp.com/a')
    const json:Ihotel[]=await respose.json()
   
    // console.log(data)
    return json;
});
// export function fetchHotel():any {
//    return async function fetchProductThunk(dispatch:any, getState:any) {
//     // dispatch(setStatus(STATUSES.LOADING));
//      try {
//         const respose=await fetch('./hotel.json')
//         const json:{restaurant:Ihotel}[]=await respose.json()
//         dispatch(setHotel(json.map((x)=>x.restaurant)))
//         // console.log(state)
//         //    const res = await fetch('https://fakestoreapi.com/products');
//         //   const data = await res.json();
//         //     dispatch(setHotel(data));
//         // dispatch(setStatus(STATUSES.IDLE));
//        } catch (err) {
//             console.log(err);
//             dispatch(setHotel([]))
//             //  dispatch(setStatus(STATUSES.ERROR));
//         }
//      }
//     }