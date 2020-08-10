import React from "react";
//redux
import Store from "./store/store";
import { Provider } from "react-redux";
//routes
import Routes from "./routes";
//components
import Nav from "./components/Nav"
//style
import "./App.scss";


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Nav/>
        <Routes/>
      </div>
    </Provider>
  );
}

export default App;
