import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
import Virat from './components/VIrat';
import Sachin from './components/Sachin';
import Rohit from './components/Rohit';
import UserParams from './components/UserParams';
import ParamOperation from './components/ParamOperation';
import Form from './components/form';
import NoteTaking from './components/NoteTaking';
import Coursal from './components/CorosalItem';
import UseEffect1 from './components/UseEffect1';
import UseEffect2 from './components/Useeffect2';
import UseEffect3 from './components/UseEffect3';
import ContextParent from './components/ContextParent';
import { Provider } from 'react-redux';
import { configureStoref } from './components/AppState';
import ReduxExample from './components/ReduxExample';
import Hotel from './components/Hotels';
import MaterialUI from './components/MaterialUI';
import Weather from './components/Weather';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Hotels from './components/Hotels';
import Profile from './components/Profile';
import Fav_Hotel from './components/Fav_Hotel';

import HotelDetails from './components/HotelDetails';
import TestApi from './components/TestApi';
// import './SetupFireBase';
function App() {
  return (
    <ContextParent>
      <Provider store={configureStoref()}>
      <BrowserRouter>
     <Routes>
      <Route path="virat" element={<Virat />} />
      <Route path="sachin" element={<Sachin />} />
      <Route path="rohit" element={<Rohit />} />
      
      <Route path="/user/:userId" element={<UserParams />}></Route>
      <Route path="/:x/:operator/:y" element={<ParamOperation />}></Route>
      <Route path="/:hotelID" element={<HotelDetails />}></Route>
      <Route path="/:x///:y" element={<ParamOperation />}></Route>
      {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
      <Route path="/form" element={<Form/>}></Route>
      <Route path="/note" element={<NoteTaking/>}></Route>
      <Route path="/corosal" element={<Coursal/>}></Route>
      <Route path="/useeffect" element={<UseEffect1/>}></Route>
      <Route path="/useeffect1" element={<UseEffect2/>}></Route>
      <Route path="/useeffect2" element={<UseEffect3/>}></Route>
      <Route path='/profile'element={<Profile/>}></Route>
      <Route path='/favhotel'element={<Fav_Hotel/>}></Route>
      <Route path='/testapi'element={<TestApi/>}></Route>
  
  
  
      <Route path='/useRedux' element={<ReduxExample/>}></Route>
      <Route path='/hotel' element={<Hotel/>}></Route>
      <Route path='/materialUI' element={<MaterialUI/>}></Route>
      <Route path='/weather' element={<Weather/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
     
      <Route path="/" element={<Hotels />} />


    </Routes>
  </BrowserRouter>
  </Provider>
  </ContextParent>
    
      
  );
}

export default App;
