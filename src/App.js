import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import fire from "./firebase/fire";

// Components
import Header from "./components/header/header.component";

//Pages
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import NotFound from "./pages/404NotFound/NotFound";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/contactUs";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./firebase/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className='App'>
        {this.state.user ? <homepage /> : <signIn />}
        <Header />
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/about' component={AboutUs} />
            <Route path='/contact' component={ContactUs} />
            <Route component={NotFound} />
          </Switch>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
