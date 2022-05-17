import React, { useState, useEffect } from 'react';
import "./DriverFeed.css";
import DriverGeneralPost from "./DriverGeneralPost";
import { db } from "../firebaseconfig/fire2";

function DriverFeed() {
    const [userRequest, setUserRequest] = useState([]);

    useEffect(() => {
        
        db.collection('userRequest').get()
            .then((res) => {
                const temp = [];
                res.forEach((snapshot) => temp.push(snapshot.data()));
                console.log(temp);
                setUserRequest([...temp])   
            })
        
    }, []);

    return (
        <div className="driver_feed">
            <div className="driver_feed_body">
                {userRequest.map((userRequest) => {
                console.log(userRequest.name);
                return (
                    <div>
                        <DriverGeneralPost
                            name={userRequest.name}
                            email={userRequest.email}
                            phoneNumber={userRequest.phoneNumber}
                            numberOfPassengers={userRequest.numberOfPassengers}
                            vehicles={userRequest.vehicles}
                            pickupTime={userRequest.pickupTime}
                            pickupLocation={userRequest.pickupLocation}
                            destination={userRequest.destination}
                            paymentRange={userRequest.paymentRange}
                            notes={userRequest.notes}
                        />
                    </div>
                )})}
            </div>
        </div>
    );
}
export default DriverFeed
