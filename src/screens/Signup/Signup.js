import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [isError, setIsError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

  ////validation
  const validateFirstName = (event) => {
    const patternname = /^[a-z\d]{5,12}$/i;
    setFirstName(event.target.value);
    if (patternname.test(event.target.value)) {
      console.log("FirstName:", "FirstNametrue");
      setIsValidFirstName(true);
    } else {
      setIsValidFirstName(false);
    }
  };
  ////
  const validateLastName = (event) => {
    const patternname = /^[a-z\d]{5,12}$/i;
    setLastName(event.target.value);
    if (patternname.test(event.target.value)) {
      console.log("LastName:", "LastNametrue");
      setIsValidLastName(true);
    } else {
      setIsValidLastName(false);
    }
  };
  ////
  const validateEmail = (event) => {
    const email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    setEmail(event.target.value);
    if (email.test(event.target.value)) {
      console.log("Email:", "Emailtrue");
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };
  ////
  const validatePassword = (event) => {
    const patternPassword = /[\w@-]{8,20}$/i;
    setPassword(event.target.value);
    if (patternPassword.test(event.target.value)) {
      console.log("password:", "passwordtrue");
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };
  ///checkValidation
  const checkValidation = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setIsError("Confirm Password should be match with password");
      // console.log("Confirm Password should be match with password");
      setIsValidConfirmPassword(false);
      console.log("password doesn't match ");
    } else {
      console.log("password match ");
      setIsValidConfirmPassword(true);
    }
  };
  //// Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      console.log("Correct data");
      history.push("/");
    }
  };
  ////
  return (
    <div>
      <form
        className="Signup-input-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="firstName"
          placeholder="First Name"
          value={firstName}
          className="input-form"
          onChange={validateFirstName}
          type="text"
        />
        <br />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          className="input-form"
          onChange={validateLastName}
          type="text"
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={email}
          className="input-form"
          onChange={validateEmail}
          type="email"
        />
        <br />
        <br />
        <input
          name="Password"
          placeholder="Password"
          value={password}
          className="input-form"
          onChange={validatePassword}
          type="password"
        />
        <br />
        <br />

        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          className="input-form"
          onChange={(e) => checkValidation(e)}
          type="password"
        />
        <br />
        <br />

        {!isValidConfirmPassword ? (
          <p className="error">{isError} </p>
        ) : (
          "equal"
        )}
        <br />

        <button className="Signup" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
