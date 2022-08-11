import React from 'react' 
import {Route, Routes} from "react-router-dom";

//Importing all items 
import Navbar from './components/navbar/Navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Signin from "./components/SignIn/Signin";
import Contact from "./pages/Contact"
import Search from "./pages/search"

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>  

        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App