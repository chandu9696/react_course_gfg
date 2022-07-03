import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit"
import { devToolsEnhancer } from 'redux-devtools-extension';
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { type } from "os"
import thunk from "redux-thunk" 
import NameSlice from "./Reducers/NameSlice"
import Up_downRedux from "./Reducers/Up_downRedux";
import HotelsSlice, { fetchHotel } from "./Reducers/HotelsSlice";
import SetSearchTest from "./Reducers/SetSearchTest";
import SetFavHotel from "./Reducers/SetFavHotel";
import FlagForFav from "./Reducers/FlagForFav";

export const rootReducer=combineReducers
({
    nameslice:NameSlice,
    updown:Up_downRedux,
    hotelslice:HotelsSlice,
    valueset:SetSearchTest,
    hotelfav:SetFavHotel,
    flagfavset:FlagForFav,
  

})

export type AppState=ReturnType<typeof rootReducer>

export const configureStoref=()=>createStore(rootReducer,{},applyMiddleware(thunk))
