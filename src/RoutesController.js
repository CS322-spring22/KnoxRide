import React from 'react'
import {Route, Routes} from 'react-router-dom';
<<<<<<< HEAD
import Feed from './Feed';
import HomePage from './UserHomePage/userHomePage';
=======
import HomePage from './UserHomePage/userHomePage';
import DriverFeed from './DriverNewsFeed/DriverFeed';
import DriverSchedulePage from './DriverSchedule/DriverSchedulePage';
>>>>>>> fe3fa22b3b9c85e656e7b280429b3e8be108e2db
import Applog from './Applog';
import Request from './RequestPage/Request.js';
import Contact from './ContactUs/Contact.js';

function RoutesController() {
    return (
        
            <Routes>
                <Route exact path="/" element={<DriverFeed />} />
                <Route exact path="/driverschedule" element={<DriverSchedulePage />} />
                <Route exact path="/login" element={<Applog />} />
                <Route exact path="/homepage" element={<HomePage />} />
                <Route exact path = "/request" element = {<Request/>} />
                <Route exact path = "/contact" element = {<Contact/>} />
            </Routes>
    )
}


export default RoutesController
