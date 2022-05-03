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
                    <DriverGeneralPost
                        name={"testing"}
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
                )})}



                {/* <DriverGeneralPost 
                    name="haha"
                    email="css322@knox.edu"
                    phoneNumber="01234"
                    numberOfPassengers= "4"
                    vehicles="car"
                    pickupTime="05/22/2022"
                    pickupLocation="knox college"
                    destination="knox college"
                    paymentRange="$20-25"
                    notes="this is a note to driver"
                />
                <DriverGeneralPost 
                    profilePic = "https://img-9gag-fun.9cache.com/photo/aV7nzjn_460s.jpg"
                    message = 'Pls give me a ride to Walmart and save me from my friend!!!'
                    timestamp = "Sunday"
                    username = 'Son of God'
                    image = "https://thechive.com/wp-content/uploads/2021/12/1L-40.jpg?attachment_cache_bust=3920390&quality=85&strip=info"
                />
                <DriverGeneralPost 
                    profilePic = "https://m.media-amazon.com/images/I/41BEPgN-XqL._AC_UX679_.jpg"
                    message = 'Need a ride? We got ya.'
                    timestamp = "Saturday"
                    username = 'Knox Ride admin'
                    image = "https://pics.me.me/cool-pepe-op-2713474.png"
                /> */}
            </div>
        </div>
    );
}
export default DriverFeed
