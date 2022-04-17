import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Feed from './Feed';
import HomePage from './HomePage';
import DriverHeader from './DriverHeader';
import Applog from './Applog';

function RoutesController() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Applog />} />
                {/* <Route exact path="/" element={<DriverHeader />} /> */}
                <Route exact path="/" element={<Feed />} />
                <Route exact path="/homepage" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesController
