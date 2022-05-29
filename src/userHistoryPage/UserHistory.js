import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { db } from "../firebaseconfig/fire2";
import "./UserHistory.css";
import logo from "../UserHomePage/logopic.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { auth } from "../firebaseconfig/fire2.js";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  addDoc,
  query,
  where,
  getDoc,
  deleteField,
  updateDoc,
  orderBy,
  limit,
} from "firebase/firestore";
// GET LASt 5 ENTRIES
// how this is gonna work: we grab the entire data of all user request entries ( sorted by submission time),
// then we save the individual name value pairs in their own respective arrays up to length 5,
// ex: for most recent entry  reqName[0] and reqLastName[0] etc etc will have all the data
//
const reqName = [];
const reqLastName = [];
const reqEmail = [];
const reqPhone = [];
const reqNumPas = [];
const reqPickupTime = [];
const reqPickupDate = [];
const reqPickupAddress = [];
const reqPickupAddress2 = [];
const reqPickupCity = [];

const reqDestAddress = [];
const reqDestAddress2 = [];
const reqDestCity = [];
const reqPay = [];
const reqNotes = [];

let info = [];
let info2 = [];
let info3 = [];
let info4 = [];
let info5 = [];

const stringInput = [];
let i = 0;
const hInput = [];
const myQ = "test1 un changed";

function UserHistory() {
  const history = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => history("/"));
  };
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [disable, setDisable] = useState(false);
  let q = [];

  const [user] = useAuthState(auth);
  /*
  const handleAccept = async (e) => {
    const userID = user.uid;
    e.preventDefault();

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      q = await addDoc(
        collection(
          db,
          "userRequests"
            .where("uid", "==", userID)
            .orderBy("timeStamp", "desc")
            .get()
        ),
        {
          uid: user.uid,
          timeStamp: serverTimestamp(),
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
        }
      );
    } catch (error) {
      console.log(error);
    }
    q.forEach((doc) => {
      //console.log(doc.data);
      console.log(doc.id, "=>", doc.data());
    });
*/

  let reqHist = async (e) => {
    console.log("hello test ");

    const userID = user.uid;

    const userRequestRef = db.collection("userRequest");
    const q = await userRequestRef
      .where("uid", "==", userID)
      .orderBy("timeStamp", "desc")
      .get();
    //const q = userRequestRef.where("uid", " ==", userID).get();

    q.forEach((doc) => {
      //console.log(doc.data);
      //console.log(doc.id, "=>", doc.data());
      hInput[i] = (doc.id, "=>", doc.data());
      stringInput[i] = JSON.stringify(hInput[i]);

      // x = JSON.stringify(doc.id, "=>", doc.data());
      i++;

      // console.log(doc.id, "=>", doc.data());
    });

    setInput1(hInput[hInput.length - 1]);
    setInput2(hInput[hInput.length - 2]);
    setInput3(hInput[hInput.length - 3]);
    setInput4(hInput[hInput.length - 4]);
    setInput5(hInput[hInput.length - 5]);
  };

  if (i == 1) {
    info = Object.values(input1);
    for (const [key, value] of Object.entries(input1)) {
      if (key == "name") reqName[0] = value;
      if (key == "lastName") reqLastName[0] = value;
      if (key == "email") reqEmail[0] = value;
      if (key == "phoneNumber") reqPhone[0] = value;
      if (key == "numberOfPassengers") reqNumPas[0] = value;
      if (key == "pickupLocation") reqPickupAddress[0] = value;
      if (key == "pickupLocation2") reqPickupAddress2[0] = value;
      if (key == "pickupLocation3") reqPickupCity[0] = value;
      if (key == "pickupTime") reqPickupTime[0] = value;
      if (key == "pickupDate") reqPickupDate[0] = value;
      if (key == "destination") reqDestAddress[0] = value;
      if (key == "destination2") reqDestAddress2[0] = value;
      if (key == "destination3") reqDestCity[0] = value;
      if (key == "paymentRange") reqPay[0] = value;
      if (key == "notes") reqNotes[0] = value;
    }
  } else if (i == 2) {
    info = Object.values(input1);
    info2 = Object.values(input2);

    for (const [key, value] of Object.entries(input1)) {
      if (key == "name") reqName[0] = value;
      if (key == "lastName") reqLastName[0] = value;
      if (key == "email") reqEmail[0] = value;
      if (key == "phoneNumber") reqPhone[0] = value;
      if (key == "numberOfPassengers") reqNumPas[0] = value;
      if (key == "pickupLocation") reqPickupAddress[0] = value;
      if (key == "pickupLocation2") reqPickupAddress2[0] = value;
      if (key == "pickupLocation3") reqPickupCity[0] = value;
      if (key == "pickupTime") reqPickupTime[0] = value;
      if (key == "pickupDate") reqPickupDate[0] = value;
      if (key == "destination") reqDestAddress[0] = value;
      if (key == "destination2") reqDestAddress2[0] = value;
      if (key == "destination3") reqDestCity[0] = value;
      if (key == "paymentRange") reqPay[0] = value;
      if (key == "notes") reqNotes[0] = value;
    }

    for (const [key, value] of Object.entries(input2)) {
      if (key == "name") reqName[1] = value;
      if (key == "lastName") reqLastName[1] = value;
      if (key == "email") reqEmail[1] = value;
      if (key == "phoneNumber") reqPhone[1] = value;
      if (key == "numberOfPassengers") reqNumPas[1] = value;
      if (key == "pickupLocation") reqPickupAddress[1] = value;
      if (key == "pickupLocation2") reqPickupAddress2[1] = value;
      if (key == "pickupLocation3") reqPickupCity[1] = value;
      if (key == "pickupTime") reqPickupTime[1] = value;
      if (key == "pickupDate") reqPickupDate[1] = value;
      if (key == "destination") reqDestAddress[1] = value;
      if (key == "destination2") reqDestAddress2[1] = value;
      if (key == "destination3") reqDestCity[1] = value;
      if (key == "paymentRange") reqPay[1] = value;
      if (key == "notes") reqNotes[1] = value;
    }
  } else if (i == 3) {
    info = Object.values(input1);
    info2 = Object.values(input2);
    info3 = Object.values(input3);
    for (const [key, value] of Object.entries(input1)) {
      if (key == "name") reqName[0] = value;
      if (key == "lastName") reqLastName[0] = value;
      if (key == "email") reqEmail[0] = value;
      if (key == "phoneNumber") reqPhone[0] = value;
      if (key == "numberOfPassengers") reqNumPas[0] = value;
      if (key == "pickupLocation") reqPickupAddress[0] = value;
      if (key == "pickupLocation2") reqPickupAddress2[0] = value;
      if (key == "pickupLocation3") reqPickupCity[0] = value;
      if (key == "pickupTime") reqPickupTime[0] = value;
      if (key == "pickupDate") reqPickupDate[0] = value;
      if (key == "destination") reqDestAddress[0] = value;
      if (key == "destination2") reqDestAddress2[0] = value;
      if (key == "destination3") reqDestCity[0] = value;
      if (key == "paymentRange") reqPay[0] = value;
      if (key == "notes") reqNotes[0] = value;
    }

    for (const [key, value] of Object.entries(input2)) {
      if (key == "name") reqName[1] = value;
      if (key == "lastName") reqLastName[1] = value;
      if (key == "email") reqEmail[1] = value;
      if (key == "phoneNumber") reqPhone[1] = value;
      if (key == "numberOfPassengers") reqNumPas[1] = value;
      if (key == "pickupLocation") reqPickupAddress[1] = value;
      if (key == "pickupLocation2") reqPickupAddress2[1] = value;
      if (key == "pickupLocation3") reqPickupCity[1] = value;
      if (key == "pickupTime") reqPickupTime[1] = value;
      if (key == "pickupDate") reqPickupDate[1] = value;
      if (key == "destination") reqDestAddress[1] = value;
      if (key == "destination2") reqDestAddress2[1] = value;
      if (key == "destination3") reqDestCity[1] = value;
      if (key == "paymentRange") reqPay[1] = value;
      if (key == "notes") reqNotes[1] = value;
    }
    for (const [key, value] of Object.entries(input3)) {
      if (key == "name") reqName[2] = value;
      if (key == "lastName") reqLastName[2] = value;
      if (key == "email") reqEmail[2] = value;
      if (key == "phoneNumber") reqPhone[2] = value;
      if (key == "numberOfPassengers") reqNumPas[2] = value;
      if (key == "pickupLocation") reqPickupAddress[2] = value;
      if (key == "pickupLocation2") reqPickupAddress2[2] = value;
      if (key == "pickupLocation3") reqPickupCity[2] = value;
      if (key == "pickupTime") reqPickupTime[2] = value;
      if (key == "pickupDate") reqPickupDate[2] = value;
      if (key == "destination") reqDestAddress[2] = value;
      if (key == "destination2") reqDestAddress2[2] = value;
      if (key == "destination3") reqDestCity[2] = value;
      if (key == "paymentRange") reqPay[2] = value;
      if (key == "notes") reqNotes[2] = value;
    }
  } else if (i == 4) {
    info = Object.values(input1);
    info2 = Object.values(input2);
    info3 = Object.values(input3);
    info4 = Object.values(input4);
    for (const [key, value] of Object.entries(input1)) {
      if (key == "name") reqName[0] = value;
      if (key == "lastName") reqLastName[0] = value;
      if (key == "email") reqEmail[0] = value;
      if (key == "phoneNumber") reqPhone[0] = value;
      if (key == "numberOfPassengers") reqNumPas[0] = value;
      if (key == "pickupLocation") reqPickupAddress[0] = value;
      if (key == "pickupLocation2") reqPickupAddress2[0] = value;
      if (key == "pickupLocation3") reqPickupCity[0] = value;
      if (key == "pickupTime") reqPickupTime[0] = value;
      if (key == "pickupDate") reqPickupDate[0] = value;
      if (key == "destination") reqDestAddress[0] = value;
      if (key == "destination2") reqDestAddress2[0] = value;
      if (key == "destination3") reqDestCity[0] = value;
      if (key == "paymentRange") reqPay[0] = value;
      if (key == "notes") reqNotes[0] = value;
    }

    for (const [key, value] of Object.entries(input2)) {
      if (key == "name") reqName[1] = value;
      if (key == "lastName") reqLastName[1] = value;
      if (key == "email") reqEmail[1] = value;
      if (key == "phoneNumber") reqPhone[1] = value;
      if (key == "numberOfPassengers") reqNumPas[1] = value;
      if (key == "pickupLocation") reqPickupAddress[1] = value;
      if (key == "pickupLocation2") reqPickupAddress2[1] = value;
      if (key == "pickupLocation3") reqPickupCity[1] = value;
      if (key == "pickupTime") reqPickupTime[1] = value;
      if (key == "pickupDate") reqPickupDate[1] = value;
      if (key == "destination") reqDestAddress[1] = value;
      if (key == "destination2") reqDestAddress2[1] = value;
      if (key == "destination3") reqDestCity[1] = value;
      if (key == "paymentRange") reqPay[1] = value;
      if (key == "notes") reqNotes[1] = value;
    }
    for (const [key, value] of Object.entries(input3)) {
      if (key == "name") reqName[2] = value;
      if (key == "lastName") reqLastName[2] = value;
      if (key == "email") reqEmail[2] = value;
      if (key == "phoneNumber") reqPhone[2] = value;
      if (key == "numberOfPassengers") reqNumPas[2] = value;
      if (key == "pickupLocation") reqPickupAddress[2] = value;
      if (key == "pickupLocation2") reqPickupAddress2[2] = value;
      if (key == "pickupLocation3") reqPickupCity[2] = value;
      if (key == "pickupTime") reqPickupTime[2] = value;
      if (key == "pickupDate") reqPickupDate[2] = value;
      if (key == "destination") reqDestAddress[2] = value;
      if (key == "destination2") reqDestAddress2[2] = value;
      if (key == "destination3") reqDestCity[2] = value;
      if (key == "paymentRange") reqPay[2] = value;
      if (key == "notes") reqNotes[2] = value;
    }
    for (const [key, value] of Object.entries(input4)) {
      if (key == "name") reqName[3] = value;
      if (key == "lastName") reqLastName[3] = value;
      if (key == "email") reqEmail[3] = value;
      if (key == "phoneNumber") reqPhone[3] = value;
      if (key == "numberOfPassengers") reqNumPas[3] = value;
      if (key == "pickupLocation") reqPickupAddress[3] = value;
      if (key == "pickupLocation2") reqPickupAddress2[3] = value;
      if (key == "pickupLocation3") reqPickupCity[3] = value;
      if (key == "pickupTime") reqPickupTime[3] = value;
      if (key == "pickupDate") reqPickupDate[3] = value;
      if (key == "destination") reqDestAddress[3] = value;
      if (key == "destination2") reqDestAddress2[3] = value;
      if (key == "destination3") reqDestCity[3] = value;
      if (key == "paymentRange") reqPay[3] = value;
      if (key == "notes") reqNotes[3] = value;
    }
  } else if (i <= 0) {
  } else {
    info = Object.values(input1);
    info2 = Object.values(input2);
    info3 = Object.values(input3);
    info4 = Object.values(input4);
    info5 = Object.values(input5);
    for (const [key, value] of Object.entries(input1)) {
      if (key == "name") reqName[0] = value;
      if (key == "lastName") reqLastName[0] = value;
      if (key == "email") reqEmail[0] = value;
      if (key == "phoneNumber") reqPhone[0] = value;
      if (key == "numberOfPassengers") reqNumPas[0] = value;
      if (key == "pickupLocation") reqPickupAddress[0] = value;
      if (key == "pickupLocation2") reqPickupAddress2[0] = value;
      if (key == "pickupLocation3") reqPickupCity[0] = value;
      if (key == "pickupTime") reqPickupTime[0] = value;
      if (key == "pickupDate") reqPickupDate[0] = value;
      if (key == "destination") reqDestAddress[0] = value;
      if (key == "destination2") reqDestAddress2[0] = value;
      if (key == "destination3") reqDestCity[0] = value;
      if (key == "paymentRange") reqPay[0] = value;
      if (key == "notes") reqNotes[0] = value;
    }

    for (const [key, value] of Object.entries(input2)) {
      if (key == "name") reqName[1] = value;
      if (key == "lastName") reqLastName[1] = value;
      if (key == "email") reqEmail[1] = value;
      if (key == "phoneNumber") reqPhone[1] = value;
      if (key == "numberOfPassengers") reqNumPas[1] = value;
      if (key == "pickupLocation") reqPickupAddress[1] = value;
      if (key == "pickupLocation2") reqPickupAddress2[1] = value;
      if (key == "pickupLocation3") reqPickupCity[1] = value;
      if (key == "pickupTime") reqPickupTime[1] = value;
      if (key == "pickupDate") reqPickupDate[1] = value;
      if (key == "destination") reqDestAddress[1] = value;
      if (key == "destination2") reqDestAddress2[1] = value;
      if (key == "destination3") reqDestCity[1] = value;
      if (key == "paymentRange") reqPay[1] = value;
      if (key == "notes") reqNotes[1] = value;
    }
    for (const [key, value] of Object.entries(input3)) {
      if (key == "name") reqName[2] = value;
      if (key == "lastName") reqLastName[2] = value;
      if (key == "email") reqEmail[2] = value;
      if (key == "phoneNumber") reqPhone[2] = value;
      if (key == "numberOfPassengers") reqNumPas[2] = value;
      if (key == "pickupLocation") reqPickupAddress[2] = value;
      if (key == "pickupLocation2") reqPickupAddress2[2] = value;
      if (key == "pickupLocation3") reqPickupCity[2] = value;
      if (key == "pickupTime") reqPickupTime[2] = value;
      if (key == "pickupDate") reqPickupDate[2] = value;
      if (key == "destination") reqDestAddress[2] = value;
      if (key == "destination2") reqDestAddress2[2] = value;
      if (key == "destination3") reqDestCity[2] = value;
      if (key == "paymentRange") reqPay[2] = value;
      if (key == "notes") reqNotes[2] = value;
    }
    for (const [key, value] of Object.entries(input4)) {
      if (key == "name") reqName[3] = value;
      if (key == "lastName") reqLastName[3] = value;
      if (key == "email") reqEmail[3] = value;
      if (key == "phoneNumber") reqPhone[3] = value;
      if (key == "numberOfPassengers") reqNumPas[3] = value;
      if (key == "pickupLocation") reqPickupAddress[3] = value;
      if (key == "pickupLocation2") reqPickupAddress2[3] = value;
      if (key == "pickupLocation3") reqPickupCity[3] = value;
      if (key == "pickupTime") reqPickupTime[3] = value;
      if (key == "pickupDate") reqPickupDate[3] = value;
      if (key == "destination") reqDestAddress[3] = value;
      if (key == "destination2") reqDestAddress2[3] = value;
      if (key == "destination3") reqDestCity[3] = value;
      if (key == "paymentRange") reqPay[3] = value;
      if (key == "notes") reqNotes[3] = value;
    }
    for (const [key, value] of Object.entries(input5)) {
      if (key == "name") reqName[4] = value;
      if (key == "lastName") reqLastName[4] = value;
      if (key == "email") reqEmail[4] = value;
      if (key == "phoneNumber") reqPhone[4] = value;
      if (key == "numberOfPassengers") reqNumPas[4] = value;
      if (key == "pickupLocation") reqPickupAddress[4] = value;
      if (key == "pickupLocation2") reqPickupAddress2[4] = value;
      if (key == "pickupLocation3") reqPickupCity[4] = value;
      if (key == "pickupTime") reqPickupTime[4] = value;
      if (key == "pickupDate") reqPickupDate[4] = value;
      if (key == "destination") reqDestAddress[4] = value;
      if (key == "destination2") reqDestAddress2[4] = value;
      if (key == "destination3") reqDestCity[4] = value;
      if (key == "paymentRange") reqPay[4] = value;
      if (key == "notes") reqNotes[4] = value;
    }
  }
  // console.log(Object.keys(input1));
  // console.log(Object.keys(input2));

  //console.log({ info }, { info2 });

  if (i > 5) {
    i = 5;
  }
  //console.log(info);

  //console.log("RIPPERONI PEPPERON");

  let j = 0;
  for (const [key, value] of Object.entries(input1)) {
    // console.log(key);
    // console.log(`${key}: ${value}`);
    // console.log(key == "name");
    j++;
  }

  return (
    <div>
      <header className="headerUser">
        <nav className="navbarUserContact">
          <nav className="logopic">
            <a href="/homepage">
              <img className="userContactLogo" src={logo} alt="logo" />
            </a>
          </nav>
          <ul className="nav-menu-contact">
            <li className="nav-item-contact">
              <a href="/request" className="nav-link-contact">
                Make a Request
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/userhistory" className="nav-link-contact">
                History
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/driverfeed" className="nav-link-contact">
                Become a Driver
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/contact" className="nav-link-contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item-contact">
              <button className="button-nav-link" onClick={handleLogout}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h1 className="histHeader">YOUR 5 MOST RECENT REQUESTS</h1>
        {
          <button
            disabled={disable}
            onClick={() => {
              reqHist();
              setDisable(true);
            }}
          >
            Click to load History
          </button>
        }

        <div>
          <p> name: {reqName[0]} </p>
          <p>last name: {reqLastName[0]}</p>
          <p>Email: {reqEmail[0]}</p>
          <p>Phone Number:{reqPhone[0]} </p>
          <p>Number of Passengers: {reqNumPas[0]}</p>
          <p>Pickup Date: {reqPickupDate[0]} </p>
          <p>Pickup Time: {reqPickupTime[0]}</p>
          <p>
            Pickup Location: <br></br>
            {reqPickupAddress[0]} <br></br> {reqPickupAddress2[0]} <br></br>
            {reqPickupCity[0]}
          </p>
          <p>
            Destination: <br></br>
            {reqDestAddress[0]} <br></br>
            {reqDestAddress2[0]}
            <br></br>
            {reqDestCity[0]}
          </p>
          <p>Payment Range: {reqPay[0]}</p>
          <p>
            Notes: {reqNotes[0]}
            <br></br>
          </p>
          <h2>
            <br></br>___________________________________________
          </h2>
        </div>
        <div>
          <p> name: {reqName[1]} </p>
          <p>last name: {reqLastName[1]}</p>
          <p>Email: {reqEmail[1]}</p>
          <p>Phone Number:{reqPhone[1]} </p>
          <p>Number of Passengers: {reqNumPas[1]}</p>
          <p>Pickup Date: {reqPickupDate[1]} </p>
          <p>Pickup Time: {reqPickupTime[1]}</p>
          <p>
            Pickup Location: <br></br>
            {reqPickupAddress[1]} <br></br> {reqPickupAddress2[1]} <br></br>
            {reqPickupCity[1]}
          </p>
          <p>
            Destination: <br></br>
            {reqDestAddress[1]} <br></br>
            {reqDestAddress2[1]}
            <br></br>
            {reqDestCity[1]}
          </p>
          <p>Payment Range: {reqPay[1]}</p>
          <p>
            Notes: {reqNotes[1]}
            <br></br>
          </p>
          <h2>
            <br></br>___________________________________________
          </h2>
        </div>
        <div>
          <p> name: {reqName[2]} </p>
          <p>last name: {reqLastName[2]}</p>
          <p>Email: {reqEmail[2]}</p>
          <p>Phone Number:{reqPhone[2]} </p>
          <p>Number of Passengers: {reqNumPas[2]}</p>
          <p>Pickup Date: {reqPickupDate[2]} </p>
          <p>Pickup Time: {reqPickupTime[2]}</p>
          <p>
            Pickup Location: <br></br>
            {reqPickupAddress[2]} <br></br> {reqPickupAddress2[2]} <br></br>
            {reqPickupCity[2]}
          </p>
          <p>
            Destination: <br></br>
            {reqDestAddress[2]} <br></br>
            {reqDestAddress2[2]}
            <br></br>
            {reqDestCity[2]}
          </p>
          <p>Payment Range: {reqPay[2]}</p>
          <p>
            Notes: {reqNotes[2]}
            <br></br>
          </p>
          <h2>
            <br></br>___________________________________________
          </h2>
        </div>
        <div>
          <p> name: {reqName[3]} </p>
          <p>last name: {reqLastName[3]}</p>
          <p>Email: {reqEmail[3]}</p>
          <p>Phone Number:{reqPhone[3]} </p>
          <p>Number of Passengers: {reqNumPas[3]}</p>
          <p>Pickup Date: {reqPickupDate[3]} </p>
          <p>Pickup Time: {reqPickupTime[3]}</p>
          <p>
            Pickup Location: <br></br>
            {reqPickupAddress[3]} <br></br> {reqPickupAddress2[3]} <br></br>
            {reqPickupCity[3]}
          </p>
          <p>
            Destination: <br></br>
            {reqDestAddress[3]} <br></br>
            {reqDestAddress2[3]}
            <br></br>
            {reqDestCity[3]}
          </p>
          <p>Payment Range: {reqPay[3]}</p>
          <p>
            Notes: {reqNotes[3]}
            <br></br>
          </p>
          <h2>
            <br></br>___________________________________________
          </h2>
        </div>
        <div>
          <p> name: {reqName[4]} </p>
          <p>last name: {reqLastName[4]}</p>
          <p>Email: {reqEmail[4]}</p>
          <p>Phone Number:{reqPhone[4]} </p>
          <p>Number of Passengers: {reqNumPas[4]}</p>
          <p>Pickup Date: {reqPickupDate[4]} </p>
          <p>Pickup Time: {reqPickupTime[4]}</p>
          <p>
            Pickup Location: <br></br>
            {reqPickupAddress[4]} <br></br> {reqPickupAddress2[4]} <br></br>
            {reqPickupCity[4]}
          </p>
          <p>
            Destination: <br></br>
            {reqDestAddress[4]} <br></br>
            {reqDestAddress2[4]}
            <br></br>
            {reqDestCity[4]}
          </p>
          <p>Payment Range: {reqPay[4]}</p>
          <p>
            Notes: {reqNotes[4]} <br></br>
            <br></br>
          </p>
        </div>
        {/*} <p>
          name: {info[4]} <br></br>
          last name: {info[15]}
          <br></br>
          email: {info[5]}
          <br></br>
          phone number: {info[11]}
          <br></br>
          number of passengers: {info[12]}
          <br></br>
          pick up date: {info[14]}
          <br></br>
          pick up time: {info[3]} <br></br>
          Pickup address: <br></br>
          {info[2]} <br></br>
          {info[7]} <br></br>
          {info[8]} <br></br>
          destination: <br></br>
          {info[13]} <br></br>
          {info[6]} <br></br>
          {info[1]} <br></br>
          payment range: {info[9]}
          <br></br>
          Notes: {info[0]}
          <br></br>
        </p>
  */}
        <div></div>
      </div>
    </div>
  );
}

export default UserHistory;
