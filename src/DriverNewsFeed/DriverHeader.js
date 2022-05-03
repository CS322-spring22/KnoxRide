import React from 'react';
import "./DriverHeader.css";
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";

function DriverHeader() {

    return (
        <div className="driver_header">
            <div className="driver_header_left">
                <img id="logo"
                src=""
                alt="Knox Ride Logo"
                />
                <div className="driver_header_avatar">
                    <Link to = "/driverprofile">
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
                <Link to = "/">
                    <IconButton>
                        <AssignmentIndIcon fontSize="large" className="driver_header_right_option"/>
                    </IconButton>
                </Link>

                <Link to = "/driverschedule">
                    <IconButton>
                        <EventNoteIcon fontSize="large" className="driver_header_right_option"/>
                    </IconButton>
                </Link>
                
                <IconButton>
                    <ChatBubbleIcon fontSize="large" className="driver_header_right_option"/>
                </IconButton>

                <IconButton>
                    <NotificationsIcon fontSize="large" className="driver_header_right_option"/>
                </IconButton>

                <IconButton>
                    <ArrowDropDownIcon fontSize="large" className="driver_header_right_option"/>
                    {/* options inside drop down menu:
                    1. account (edit information in profile page) 
                    2. ride history (future rides, Now, Past rides)
                    3. settings
                    4. log out 
                    */}
                </IconButton>
            </div>           
        </div>
    )
}

export default DriverHeader
