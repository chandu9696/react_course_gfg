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
function App() {
  return (
    <div> 
      <BrowserRouter>
     <Routes>
      <Route path="virat" element={<Virat />} />
      <Route path="sachin" element={<Sachin />} />
      <Route path="rohit" element={<Rohit />} />
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<UserParams />}></Route>
      <Route path="/:x/:operator/:y" element={<ParamOperation />}></Route>
      <Route path="/:x///:y" element={<ParamOperation />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>

    </Routes>
  </BrowserRouter>
    </div>
      
  );
}

export default App;
