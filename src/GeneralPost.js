import React from 'react';
import './GeneralPost.css';
import { Avatar } from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function GeneralPost({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="generalPost">

            <div className="genPost_top">
                <Avatar src={ profilePic } className="genPost_avatar" />
                <div className="genPost_topInfo">
                    <h3>{ username }</h3>
                    <p>{ timestamp }</p>
                </div>
            </div>

            <div className="genPost_bottom">
                <p>{ message }</p>
            </div>

            <div className="genPost_image">
                <img src={ image } alt="" />
            </div>

            <div className="genPost_options">

                <div className="genPost_option">
                    <DoneIcon />
                    <p>Accept</p>
                </div>

                <div className="genPost_option">
                    <ClearIcon />
                    <p>Decline</p>
                </div>

                <div className="genPost_option">
                    <ChatBubbleIcon />
                    <p>Negotiate</p>
                </div>

                <div className="genPost_option">
                    <BookmarkBorderIcon />
                    <p>Save</p>
                </div>

            </div>
        </div>
    )
}

export default GeneralPost
