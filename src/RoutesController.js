import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Feed from './Feed';
import HomePage from './HomePage';
import Applog from './Applog';
import Request from './Request';

function RoutesController() {
    return (

        <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route exact path="/login" element={<Applog />} />
            <Route exact path="/homepage" element={<HomePage />} />
            <Route exact path="/request" element={<Request />} />
        </Routes>
    )
}


export default RoutesController
