import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Feed from './Feed';
import HomePage from './UserHomePage/userHomePage';
import Applog from './Applog';
import Request from './RequestPage/Request.js';
import Contact from './ContactUs/Contact.js';

function RoutesController() {
    return (
        
            <Routes>
                <Route exact path="/" element={<Feed />} />
                <Route exact path="/login" element={<Applog />} />
                <Route exact path="/homepage" element={<HomePage />} />
                <Route exact path = "/request" element = {<Request/>} />
                <Route exact path = "/contact" element = {<Contact/>} />
            </Routes>
    )
}


export default RoutesController
