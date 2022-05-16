import React, { useState } from 'react';
import "./DriverHeader.css";
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import KRlogo from '../Logincomponents/KRlogo.png';
import fire2 from '../firebaseconfig/fire2';

function DriverHeader() {
    const [revealText, setRevealText] = useState(false);
    const onHover = () => {
        setRevealText(true);
    }
    const onLeave = () => {
        setRevealText(false);
    }
    const handleLogout = () => {
        fire2.auth().signOut();
    }

    return (
        <div className="driver_header">
            <div className="driver_header_left">
                <img id="driverheader_logo"
                src={KRlogo} alt="Knox Ride Logo"
                />

                <div className="driver_header_avatar">
                    <Link to ="/">
                        <IconButton>
                            <Avatar src="" fontSize="large"/>
                        </IconButton>
                    </Link>
                    <h3>CS 322</h3>
                </div>
            </div>



            <div className="driver_header_center">
                <div className="driver_searchBar">
                    <SearchIcon />
                    <input type="text"></input>
                </div>
            </div> 



            <div className="driver_header_right">
                <Link to = "/driverprofile">
                    <IconButton onMouseEnter={onHover} onMouseLeave={onLeave}>
                        {revealText ? "Driver's Profile" : <AssignmentIndIcon fontSize="large" className="driver_header_right_option"/>}
                    </IconButton>
                </Link>

                <Link to ="/homepage">
                    <IconButton onMouseEnter={onHover} onMouseLeave={onLeave}>
                        {revealText ? "Switch To User" : <PersonIcon fontSize="large" className="driver_header_right_option"/>}
                    </IconButton>
                </Link>

                <Link to ="#">
                    <IconButton onMouseEnter={onHover} onMouseLeave={onLeave}>
                        {revealText ? "Settings" :<SettingsIcon fontSize="large" className="driver_header_right_option"/>}
                    </IconButton>
                </Link>

                <Link to ="#">
                    <IconButton onMouseEnter={onHover} onMouseLeave={onLeave} onClick={handleLogout}>
                        {revealText ? "Log Out" :<LogoutIcon fontSize="large" className="driver_header_right_option"/>}
                    </IconButton>
                </Link>

            </div>           
        </div>
    );
}

export default DriverHeader
