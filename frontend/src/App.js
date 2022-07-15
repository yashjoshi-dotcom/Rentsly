import React from 'react' 
import {Route, Routes} from "react-router-dom";

//Importing all items 
import Navbar from './components/Navbar'
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Signin from "./components/Signin";
import Contact from "./components/Contact"

const App = () => {
  return (
    <>  
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>

    </>
  )
}

export default App