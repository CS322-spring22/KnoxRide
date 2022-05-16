import React, { useState } from 'react';
import './DriverGeneralPost.css';
import { Avatar } from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AcceptPopUp from "./AcceptPopUp";

function DriverGeneralPost({ name, email, phoneNumber, numberOfPassengers, vehicles, pickupTime, pickupLocation, destination, paymentRange, notes }) {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [accept, setAccept] = useState(false);

    return (
        <div className="driverGeneralPost">

            <div className="driver_genPost_top">
                <Avatar src="" className="driver_genPost_avatar" />
                <div className="driver_genPost_topInfo">
                    {/* <h3>{ username }</h3>
                    <p>{new Date(timestamp)?.toDate().toUTCString()}</p> */}
                </div>
            </div>

            <div className="driver_genPost_bottom">

                <label>Name</label>
                <p>{ name }</p>

                <label>Email</label>
                <p>{ email }</p>

                <label>Phone number</label>
                <p>{ phoneNumber }</p>

                <label>Number of passengers</label>
                <p>{ numberOfPassengers }</p>

                <label>Vehicles</label>
                <p>{ vehicles }</p>

                <label>Pickup time</label>
                <p>{ pickupTime }</p>

                <label>Pickup location</label>
                <p>{ pickupLocation }</p>

                <label>Destination</label>
                <p>{ destination }</p>

                <label>Payment range</label>
                <p>{ paymentRange }</p>

                <label>Notes</label> 
                <p>{ notes }</p>

            </div>

            <div className="driver_genPost_options">

                <div className="driver_genPost_option" onClick={() => setAccept(true)}>
                    <div className="driver_genPost_option">
                        <DoneIcon />
                        <p>Accept</p>
                    </div>
                    <AcceptPopUp open={buttonPopup} setTrigger={setButtonPopup}>
                        <label>Money: </label>
                        <input></input>
                    </AcceptPopUp>
                </div>
    
                <div className="driver_genPost_option">
                    <BookmarkBorderIcon />
                    <p>Save</p>
                </div>
            </div>
        </div>
    );
}

export default DriverGeneralPost
