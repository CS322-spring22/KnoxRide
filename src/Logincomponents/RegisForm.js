import React, { useState } from "react";
import KRlogo from "./KRlogo.png";

import fire2 from "../firebaseconfig/fire2";
import { render } from "@testing-library/react";
/*

class RegisForm extends Component {

    state = {
        displayName: "",
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        setEmailError: "",
        setPasswordError: ""
    };


    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };



    handleSubmit = (e) => {
        e.preventDefault();

        try {

        } catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(error.message);
                    break;

            }

        };

        this.setState({ displayName: '', email: '', password: '', emailError: '', passwordError: '', setEmailError: '', setPasswordError: '' });
    };




    render() {
        const { displayName, email, password } = this.state;
        return (
            <div>
                <form className='register' onSubmit={this.handleSubmit}>
                    <h2>Registration</h2>

                    <input type="name" name="displayName" value={displayName} onChange={this.handleChange} placeholder="Name" />

                    <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />

                    <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" />

                    <button>Sign Up</button>

                </form>

            </div>
        )
    }
}



export default RegisForm;
*/
