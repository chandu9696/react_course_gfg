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
    var myHeaders = new Headers();
    myHeaders.append("Accept-Encoding", "gzip, deflate, br");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("DNT", "1");
    myHeaders.append("Origin", "http://localhost:5000");
    
    var raw = JSON.stringify({
      "query": "# Write your query or mutation here\n{\n  hotels {\n    id,name,cuisines,featured_image\n  }\n}\n"
    });
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    //   redirect: 'follow'
    };
    
    const response= await fetch("https://graphqlnodegfg.herokuapp.com/graphql", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // const respose=await fetch('https://nodegfg.herokuapp.com/a')
    const json:{data:{hotels:Ihotel[]}}=await response.json()

    // console.log(data)
    return json.data.hotels;
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