import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Feed from './Feed';
import HomePage from './HomePage';
import Header from './Header';

function RoutesController() {
    return (
        <Routes>
            <Route exact path="/" element={<Header />} />
            <Route exact path="/" element={<Feed />} />
            <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
    )
}

export default RoutesController
