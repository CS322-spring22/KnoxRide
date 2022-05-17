import React, { useState, useEffect } from "react";
//import APLOG from '../APLOG';
import "../LR.css";
import { auth, db } from "../firebaseconfig/fire2";
//import Hero from './Hero';
import { Link } from "react-router-dom";
//import KRlogo from './KRlogo';

const RegisF = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [license, setLicense] = useState("");
  const [car, setCar] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loader, setLoader] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");

    setFname("");
    setLname("");
    setPhonenumber("");
    setLicense("");
    setCar("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");

    setPhoneError("");
  };

  const handleSignup = () => {
    clearErrors();
    setLoader(true);
    const { user1 } = auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          case "auth/phone-already-in-use":
            setPhoneError(err.message);
            break;
        }
      });
    //createUserDocument(user1, { fname, lname, phonenumber, license, car })
    db.collection("UserProfile")
      .add({
        fname: fname,
        lname: lname,
        phonenumber: phonenumber,
        license: license,
        car: car,
      })
      .then(() => {
        alert("You have been registered");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="Con">
      <div className="RegisF">
        {/*</div><div className="RegisFContainer">
        {/*<img src={KRlogo} className="KR-logo" alt="KRlogo" />*/}

        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>

        <label>First Name</label>
        <input
          type="text"
          required
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />

        <label>Last Name</label>
        <input
          type="text"
          required
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />

        <label>Phone Number</label>
        <input
          type="number"
          required
          minlength="10"
          maxlength="10"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <p className="errorMsg">{phoneError}</p>

        <label>Car License</label>
        <input
          type="text"
          required
          minlength="7"
          maxlength="10"
          value={license}
          onChange={(e) => setLicense(e.target.value)}
        />

        <label>Car</label>
        <input
          type="text"
          required
          value={car}
          onChange={(e) => setCar(e.target.value)}
        />
        <br>

        </br>

        <div className="btnContainer">
          {/*{hasAccount ? (*/}
          <>
            <button onClick={handleSignup}>Register</button>
            <br>


            </br>
          </>
          <br>
          </br>
          {/*}) : (*/}
          <div className="btnSignUp"></div>
          <>
            <Link to="../login">
              <button>Login</button>
              {/*<p>Have An Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>*/}
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};

export default RegisF;
