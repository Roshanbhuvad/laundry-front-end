import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import ShopRegisterPage from "./Components/ShopRegisterPage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserRegisterPage from "./Components/UserRegisterPage";
import IndexPage from "./Components/IndexPage";
import makeToast from "./Toaster";

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/user/logincustomer"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/user/registercustomer"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
      <div className="auth-inner">
    <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route path="/user/logincustomer" component={LoginPage} exact />
    <Route path="/shops/registershop" component={ShopRegisterPage} exact />
    <Route path="/user/registercustomer" component={UserRegisterPage} exact />
    </Switch>
    </div>
    </div>
    </div></Router>
  );
}

export default App;
