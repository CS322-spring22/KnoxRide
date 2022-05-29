import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./UserHomePage/userHomePage.js";
import DriverFeed from "./DriverNewsFeed/DriverFeed";
//import DriverSchedulePage from "./DriverSchedule/DriverSchedulePage";
import Applog from "./Applog";
import Request from "./RequestPage/Request.js";
import Contact from "./ContactUs/Contact.js";
import UserRequest from "./UserRequestPage/UserRequest";
import Hero from "./Hero.js";
//import DriverFeed from "./DriverNewsFeed/DriverFeed";
//import DriverSchedulePage from "./DriverSchedule/DriverSchedulePage";
import APLOG from "./APLOG";
//import Request from "./RequestPage/Request.js";
//import Contact from "./ContactUs/Contact.js";
import RegisF from "./Logincomponents/RegisF";
function RoutesController() {
  return (
    <Routes>
      {/*<Route exact path="/" element={<DriverFeed />} />
      <Route exact path="/driverschedule" element={<DriverSchedulePage />} /> */}
      <Route exact path="/login" element={<Applog />} />
      <Route exact path="/Register" element={<RegisF />} />
      <Route exact path="/homepage" element={<HomePage />} />
      <Route exact path="/request" element={<Request />} />
      <Route exact path="/userrequest" element={<UserRequest />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/term" element={<Hero />} />
    </Routes>
  );
}

export default RoutesController;
