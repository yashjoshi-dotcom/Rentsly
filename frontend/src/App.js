import React from 'react' 
import {Route, Routes} from "react-router-dom";

//Importing all items 
import Navbar from './components/UI/navbar/Navbar'
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Signin from "./components/SignIn/Signin";
import Contact from "./components/Contact"
import Search  from './components/search';

const App = () => {
  return (
    <>  
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>

    </>
  )
}

export default App