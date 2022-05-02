import React from 'react';
import './DriverGeneralPost.css';
import { Avatar } from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function DriverGeneralPost({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="driverGeneralPost">

            <div className="driver_genPost_top">
                <Avatar src={ profilePic } className="driver_genPost_avatar" />
                <div className="driver_genPost_topInfo">
                    <h3>{ username }</h3>
                    <p>{ timestamp }</p>
                </div>
            </div>

            <div className="driver_genPost_bottom">
                <p>{ message }</p>
            </div>

            <div className="driver_genPost_image">
                <img src={ image } alt="" />
            </div>

            <div className="driver_genPost_options">

                <div className="driver_genPost_option">
                    <DoneIcon />
                    <p>Accept</p>
                </div>

                <div className="driver_genPost_option">
                    <ChatBubbleIcon />
                    <p>Negotiate</p>
                </div>

                <div className="driver_genPost_option">
                    <BookmarkBorderIcon />
                    <p>Save</p>
                </div>

            </div>
        </div>
    )
}

export default DriverGeneralPost
