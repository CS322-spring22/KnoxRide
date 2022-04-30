import React, { useState } from 'react';
import KRlogo from './KRlogo.png';

import fire2 from '../firebaseconfig/fire2';
import { render } from '@testing-library/react';





function RegisForm() {
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire2.auth().createUserWithEmailAndPassword(email, password).then((u) => {
        console.log('Successfully Signed Up');
    })
        .catch((err) => {
            console.log('Error: ' + err.toString());
        })




    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <div>Email</div>
                <input id="email" placeholder="Enter Email.." type="text" />
            </div>
            <div>
                <div>Password</div>
                <input id="password" placeholder="Enter Password.." type="text" />
            </div>
            <button style={{ margin: '10px' }} onClick={this.signUp}>Sign Up</button>
        </div>

    )
}

export default RegisForm;
