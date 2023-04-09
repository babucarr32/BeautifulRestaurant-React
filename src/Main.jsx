import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from "./components/Body/LandingPage";
import Menu from "./components/Body/Menu/Menu";
import Location from "./components/Body/Location/Location";
import Contact from "./components/Body/ContactUs/Contact";
import Order from "./components/Body/OrderNow/Order";
import Header from "./components/Header/Header";

function Main() {
  const location = window.location.href.split("/");
  console.log(location)
  return (
    <div>
        <BrowserRouter>
            <Header></Header>
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
{/* <a href="https://www.freepik.com/free-vector/modern-world-map-with-pins_1177535.htm#query=world%20map%20pin&position=21&from_view=keyword&track=ais">Image by Harryarts</a> on Freepik */}
export default Main;
