import React from "react";
import Home from "./mycomponents/Home/Home";
import Main from "./mycomponents/Main";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </>
  );
};
export default App;
