import React, { useState } from 'react'
import './UserRequest.css';
import { db } from '../firebaseconfig/fire2';

function UserRequest() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [numberOfPassengers, setNumberOfPassengers] = useState("");
    const [vehicles, setVehicles] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [paymentRange, setPaymentRange] = useState("");
    const [notes, setNotes] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('userRequest').add({
            name: name, 
            email: email,
            phoneNumber: phoneNumber,
            numberOfPassengers: numberOfPassengers, 
            vehicles: vehicles,
            pickupTime: pickupTime, 
            pickupLocation: pickupLocation,
            destination: destination,
            paymentRange: paymentRange,
            notes: notes,
        })
        .then(() => {
            alert("Your request has been submitted");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName("");
        setEmail("");
        setPhoneNumber("");
        setNumberOfPassengers("");
        setVehicles("");
        setPickupTime("");
        setPickupLocation("");
        setDestination("");
        setPaymentRange("");
        setNotes("");
    };

    return (
        <form className="userRq_form" onSubmit={ handleSubmit }>
            <h1>Ride Request Form</h1>

            <label>Name</label>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>Email</label>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label>Phone number</label>
            <input placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>

            <label>Number of passengers</label>
            <input placeholder="Number of passenger" value={numberOfPassengers} onChange={(e) => setNumberOfPassengers(e.target.value)}/>

            <label>Vehicles</label>
            <input placeholder="Type of vehicles" value={vehicles} onChange={(e) => setVehicles(e.target.value)}/>

            <label>Pickup time</label>
            <input placeholder="Pickup date and time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}/>

            <label>Pickup location</label>
            <input placeholder="Pickup location" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}/>

            <label>Destination</label>
            <input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)}/>

            <label>Payment range</label>
            <input placeholder="$" value={paymentRange} onChange={(e) => setPaymentRange(e.target.value)}/>

            <label>Notes</label> 
            <textarea placeholder="Message to your driver" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

            <button type ="submit"  style={{background : loader ? "#ccc" : "rgb(2, 2, 110)"}}>Submit</button>

        </form>
    )
}

export default UserRequest
