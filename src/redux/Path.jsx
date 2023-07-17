import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Path = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" Component={<Home />} />
        </Routes>
      
    </div>
  );
};

export default Path;
