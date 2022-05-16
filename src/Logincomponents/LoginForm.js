import React from "react";
import KRlogo from "./KRlogo.png";
import RegisForm from "./RegisForm";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    //handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="LoginForm">
      <div className="LoginFormContainer">
        <img src={KRlogo} className="KR-logo" alt="KRlogo" />
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
        <div className="btnContainer">
          {/*{hasAccount ? (*/}
          <>
            <button onClick={handleLogin}>Sign In</button>
            <p>
              Don't Have An Account?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
            </p>
          </>

          {/*}) : (*/}

          <>
            {
              <Link to="../RegisForm">
                <button>Register</button>
              </Link>
            }
          </>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
