import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import LoginPage from "./Components/LoginPage";
//import ShopRegisterPage from "./Components/ShopRegisterPage";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import UserRegisterPage from "./Components/UserRegisterPage";
//import IndexPage from "./Components/IndexPage";
import makeToast from "./Toaster";
import Navbar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/ShopLogin'
import UserLogin from './components/UserLogin'
import Register from './components/ShopRegister'
import UserRegister from './components/UserRegister'
import Profile from './components/Profile'
import Admin from './components/AdminLogin'



//import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Switch>
            <Route exact path="/shops/registershop" component={Register} />
            <Route exact path="/user/registercustomer" component={UserRegister} />
            <Route exact path="/shops/login" component={Login} />
            <Route exact path="/user/logincustomer" component={UserLogin} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/admin/loginadmin" component={Admin} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App

