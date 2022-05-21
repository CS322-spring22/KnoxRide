import React from 'react'
import "./DriverSideBar.css";
import DriverSideBarRow from "./DriverSideBarRow";
import { Link } from "react-router-dom";

function DriverSideBar() {
    return (
        <div className="sideBar">
            <Link to = "/acceptedrequests">
                <DriverSideBarRow title="Accepted Requests" />
            </Link>
            <DriverSideBarRow title="Saved Requests"/>
        </div>
    );
}

export default DriverSideBar
