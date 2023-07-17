import React from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/detail" element={<Detail /> } />
        <Route  path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
