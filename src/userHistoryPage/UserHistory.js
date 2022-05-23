import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { db } from "../firebaseconfig/fire2";
import "../RequestPage/Request.css";
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

  const [user] = useAuthState(auth);

  let reqHist = () => {
    console.log("hello test ");

    const userID = user.uid;
    const userRequestRef = db.collection("userRequest");
    const q = userRequestRef.where("uid", " ==", userID).get();
    console.log(q);
    console.log("HELLO  ITS ME 4444");

    const querySnapshot = getDocs(q);
    console.log(q);

    querySnapshot.forEach((doc) => {
      if (!doc.data().history) {
        console.log("no history yet");
      } else {
        doc.data().history.forEach((s) => {
          console.log(s); //get all of history
          //input and output are a single string split by :
          var arr = s.split(":");
          //put those split things into their own arrays
          hInput.push(arr[0]);
        });
      }
    });
    setInput1(hInput[hInput.length - 1]);
    setInput2(hInput[hInput.length - 2]);
    setInput3(hInput[hInput.length - 3]);
    setInput4(hInput[hInput.length - 4]);
  };

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
              <a href="#" className="nav-link-contact">
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
      <p>
        haushdaushd {hInput} XDXDXD {myQ} XDXDXDHELLP
      </p>
      <button className="history-button-left" onClick={reqHist}></button>
    </div>
  );
}

export default UserHistory;
