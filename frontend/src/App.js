import React from "react";
import { Route, Routes } from "react-router-dom";

//Importing all items
import Navbar from "./components/UI/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Signin from "./components/SignIn/Signin";
import Contact from "./pages/Contact";
import Search from "./pages/search";
import ComingSoon from "./components/ComingSoon/ComingSoon";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<ComingSoon />} />
      </Routes>
    </>
  );
};

export default App;
