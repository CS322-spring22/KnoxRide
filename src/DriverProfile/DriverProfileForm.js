import React from 'react';
import './DriverProfileForm.css';

function DriverGeneralPost({ fname, lname, phonenumber, car, license }) {

    return (
        <div className="driverProfileForm">

            <div className="driver_genPost_bottom">

                <label>First Name: </label>
                <p>{ fname }</p>

                <label>Last Name: </label>
                <p>{ lname }</p>

                <label>Phone Number: </label>
                <p>{ phonenumber }</p>

                <label>Car: </label>
                <p>{ car }</p>

                <label>License: </label>
                <p>{ license }</p>

            </div>
        </div>
    );
}

export default DriverGeneralPost
