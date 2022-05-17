import React from 'react'
import "./DriverSideBarRow.css";

function DriverSideBarRow({ title }) {
    return (
        <div className="driverSideBarRow">
            <h4>{ title }</h4>
        </div>
    );
}

export default DriverSideBarRow;
