import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
//action
//import { createUser } from "../actions/signin";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    console.log("user created");
  };

  return (
    <Fragment>
      <form onSubmit={signin}>
        <p>Create Account</p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Create Account"  />
      </form>
    </Fragment>
  );
};

export default Signin;
