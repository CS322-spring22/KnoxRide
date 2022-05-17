import { SwitchVideoSharp } from '@mui/icons-material';
import React from 'react'
import "./DriverSideBar.css";
import DriverSideBarRow from "./DriverSideBarRow";

function DriverSideBar() {
    return (
        <div className="sideBar">
            <DriverSideBarRow title="Accepted Requests" />
            <DriverSideBarRow title="Saved Requests"/>
        </div>
    );
}

export default DriverSideBar
