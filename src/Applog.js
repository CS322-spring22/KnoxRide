import React, { useState, useEffect } from 'react';
import LoginForm from './Logincomponents/LoginForm';
import './LR.css';
import fire2 from './firebaseconfig/fire2';
import Hero from './Hero';

//import RegisForm from './Logincomponents/RegisForm';
//import { Route, Routes } from 'react-router-dom';
import UserHomePage from './UserHomePage/userHomePage';
//import { Link } from 'react-router-dom'




const Applog = () => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire2
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

        }

      });
  };

  const handleSignup = () => {
    clearErrors();
    fire2
      .auth()
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
        }
      });
  };

  const handleLogout = () => {
    fire2.auth().signOut();
  };


  const authListener = () => {
    fire2.auth().onAuthStateChanged(user => {
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


    <div className='Applog'>
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}

        />
      )}


    </div>

  )






}




export default Applog;
