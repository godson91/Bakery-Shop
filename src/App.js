import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Header from "./components/header/header.component";

//Pages
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import NotFound from "./pages/404NotFound/NotFound";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/contactUs";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='App'>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={ContactUs} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
