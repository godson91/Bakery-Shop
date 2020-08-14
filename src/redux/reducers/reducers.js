import { combineReducers } from "redux";
//import the reducers
import createUser from "./signin";
import loginUser from "./login"
import logoutUser from "./logout"

const reducers = combineReducers({
  //reducers go here
  logIn:loginUser,
  signIn: createUser,
  logOut:logoutUser
});

export default reducers;
