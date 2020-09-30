import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : ""
      password : ""
    }
  }
  render() {
    return(
      <div>
        <form>
          <input
          type = "email"
          id = "email"
          placeholder = "enter email address"
          onChange = {this.handleChange}
          value = {this .state.email}
          />
          <input
          type = "password"
          id = "password"
          placeholder = "Password required"
          value = {this.state.password}
          />
          <button onClick = {this.login}>Login</button>
          <button onClick = {this.signup}>SignUp</button>
        </form>
      </div>
    )
  }
}
export default Login;