import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./components/Body/LandingPage";
import Menu from "./components/Body/Menu/Menu";
import Location from "./components/Body/Location/Location";
import Contact from "./components/Body/ContactUs/Contact";
import Order from "./components/Body/OrderNow/Order";

function Main() {
  return (
    <div>
        {/* <LandingPage></LandingPage> */}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/order' element={<Order />}/>
                <Route path='/location' element={<Location />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Main;
