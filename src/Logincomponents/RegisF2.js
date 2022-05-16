import React, { Component } from 'react';
import { auth, createUserDocument } from '../firebaseconfig/fire2';
import '../LR.css';


class RegisF2 extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    license: "",
    car: "",
    phoneNumber: "",
    emailError: "",
    passwordError: "",
    setEmailError: "",
    setPasswordError: ""
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, fName, lName, license, phoneNumber, car } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user, { fName, lName, license, phoneNumber, car });
    } catch (error) {
      console.log('error', error);
    }

    this.setState({
      fName: "",
      lName: '',
      email: '',
      password: '',
      license: '',
      car: '',
      phoneNumber: '',
    });
  };

  render() {
    const { email, password, fName, lName, license, car, phoneNumber } = this.state;
    return (
      <div className='RegisF'>
        <form className="RegisFContainer" onSubmit={this.handleSubmit}>


          <label>First Name</label>
          <input type="text"
            required
            name="fName"
            value={fName}
            onChange={this.handleChange}
          />

          <label>Last Name</label>
          <input type="text"
            required
            name="lName"
            value={lName}
            onChange={this.handleChange}
          />


          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}

          />

          <label>Password</label>
          <input
            required
            minLength={7}
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <label>License</label>
          <input type="text"
            required
            minLength={7}
            maxLength={10}
            name="license"
            value={license}
            onChange={this.handleChange}
          />

          <label>Car</label>
          <input type="text"
            name="car"
            value={car}
            onChange={this.handleChange}
          />

          <label>Phone Number</label>
          <input type="number"
            required
            size={10}
            maxLength={10}
            minLength={10}
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />





          <button>Register</button>
        </form>
      </div>

    );
  }
}

export default RegisF2;