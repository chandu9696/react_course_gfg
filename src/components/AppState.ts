import { combineReducers, createStore } from "@reduxjs/toolkit"
import { devToolsEnhancer } from 'redux-devtools-extension';
//import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { type } from "os"
import NameSlice from "./Reducers/NameSlice"
import Up_downRedux from "./Reducers/Up_downRedux";
import HotelsSlice from "./Reducers/HotelsSlice";
import SetSearchTest from "./Reducers/SetSearchTest";

export const rootReducer=combineReducers
({
    nameslice:NameSlice,
    updown:Up_downRedux,
    hotelslice:HotelsSlice,
    valueset:SetSearchTest

})

export type AppState=ReturnType<typeof rootReducer>

export const configureStoref=()=>createStore(rootReducer,{},devToolsEnhancer({}))
