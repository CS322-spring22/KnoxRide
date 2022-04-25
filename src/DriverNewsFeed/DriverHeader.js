import React from 'react';
import "./DriverHeader.css";
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
// import { Link } from "react-routder-dom";

function DriverHeader() {
    return (
        <div className="driver_header">
            <div className="driver_header_left">
                <img id="logo"
                src="data:image/png;base64,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"
                alt="Knox Ride Logo"
                />

                <div className="driver_header_avatar">
                    <IconButton>
                        <Avatar fontSize="large"/>
                    </IconButton>
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
                <IconButton>
                    <AssignmentIndIcon fontSize="large" className="driver_header_right_option"/>
                </IconButton>

                <IconButton>
                    <EventNoteIcon fontSize="large" className="driver_header_right_option"/>
                </IconButton>

                <IconButton>
                    <ChatBubbleIcon fontSize="large" className="driver_header_right_option"/>
                </IconButton>

                <IconButton>
                    <NotificationsIcon fontSize="large" className="driver_header_right_option"/>
                </IconButton>

                <IconButton>
                    <ArrowDropDownIcon fontSize="large" className="driver_header_right_option"/>
                </IconButton>
            </div>           
        </div>
    )
}

export default DriverHeader
