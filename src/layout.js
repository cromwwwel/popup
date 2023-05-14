import React from "react";
import {Route, Routes} from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Menu from "./menu";
import Buttons from "./buttons";


const Layout = () => {

    return (
        <div>
            <Menu/>
            <div>
                <Routes>
                    <Route path="react-buttons/:emailId/:modal" element={<Buttons/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route index path="/" element={<Home/>}/>
                </Routes>
            </div>
        </div>


    )

}

export default Layout;