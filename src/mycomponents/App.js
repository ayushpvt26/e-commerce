import React from "react";
import Header from "./Header";
import Main from "./Main";
import Home from "./Home";
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
<>
 <Routes>
<Route path="/" element={<Home />} />
<Route path="/Home" element={<Home/>} />  
<Route path="/Main" element={<Main/>} />  
</Routes>
 
  
    </>
  );
};
export default App;