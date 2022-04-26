import React from 'react'
import {Route, Routes} from 'react-router-dom';
import HomePage from './UserHomePage/userHomePage';
import DriverFeed from './DriverNewsFeed/DriverFeed';
import DriverProfilePage from './DriverProfile/DriverProfilePage';
import DriverSchedulePage from './DriverSchedule/DriverSchedulePage';
import HomePage from './HomePage';
import Applog from './Applog';
import Request from './RequestPage/Request.js';
import Contact from './ContactUs/Contact.js';

function RoutesController() {
    return (
        
            <Routes>
                <Route exact path="/" element={<DriverFeed />} />
                <Route exact path="/driverprofile" element={<DriverProfilePage />} />
                <Route exact path="/driverschedule" element={<DriverSchedulePage />} />
                <Route exact path="/login" element={<Applog />} />
                <Route exact path="/homepage" element={<HomePage />} />
                <Route exact path = "/request" element = {<Request/>} />
                <Route exact path = "/contact" element = {<Contact/>} />
            </Routes>
    )
}


export default RoutesController
