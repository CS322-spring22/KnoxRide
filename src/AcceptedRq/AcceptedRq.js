import React, { useState, useEffect } from 'react'
import "./AcceptedRq.css";
import DriverGeneralPost from "../DriverNewsFeed/DriverGeneralPost";
import { db } from "../firebaseconfig/fire2";

function AcceptedRq() {
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    useEffect(() => {
        
    db.collection('acceptedRequests')
        .orderBy("timeStamp", "desc")
        .get()
        .then((res) => {
            const rq = [];
            res.forEach((snapshot) => rq.push(snapshot.data()));
            console.log(rq);
            setAcceptedRequests([...rq])   
        })
        
    }, []);

    return (
        <div className="driver_feed">
            <div className="driver_feed_body">
                {acceptedRequests.map((acceptedRequests) => {
                return (
                    <div>
                        <DriverGeneralPost
                            name={acceptedRequests.name}
                            email={acceptedRequests.email}
                            phoneNumber={acceptedRequests.phoneNumber}
                            numberOfPassengers={acceptedRequests.numberOfPassengers}
                            vehicles={acceptedRequests.vehicles}
                            pickupTime={acceptedRequests.pickupTime}
                            pickupLocation={acceptedRequests.pickupLocation}
                            destination={acceptedRequests.destination}
                            paymentRange={acceptedRequests.paymentRange}
                            notes={acceptedRequests.notes}
                        />
                    </div>
                )})}
            </div>
            
        </div>
    )
}

export default AcceptedRq






