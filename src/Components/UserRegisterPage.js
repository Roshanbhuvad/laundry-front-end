import React from "react";
import axios from "axios";
import makeToast from "../Toaster";
//import { useLocation } from "react-router-dom";
//import {GOOGLE_API_KEY} from "./config"

const UserRegisterPage = (props) => {
  const usernameRef = React.createRef();
  const emailRef = React.createRef();
  const phoneNumberRef = React.createRef();
  const passwordRef = React.createRef();
  const geometryRef = React.createRef();
  const roleRef = React.createRef();
  //const location = useLocation();

  const registerUser = (props) => {
  const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;
    const geometry = geometryRef.current.value;
    const role = roleRef.current.value;

    axios.post("http://localhost:8000/user/registercustomer", {
        username,
        email,
        phoneNumber,
        password,
        role,
        geometry
      }).then((response) => {
        makeToast("success", response.data.message);
        props.history.push("/logincustomer");
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
  };

  return ( 
    <form>
    <h3>Customer Registraion</h3>

      <div className = "form-group">
      <label htmlFor = "name">Name</label>  
      <input type = "text" className="form-control"
      name = "username"
      id = "username"
      placeholder = "Enter your name"
      ref = {usernameRef} /> 
      </div>
      <div className = "form-group">
      <label htmlFor = "email"> Email </label>
      <input type = "text" className="form-control"
      name = "email"
      id = "email"
      placeholder = "abc@example.com"
      ref = {emailRef}/>
      </div> 
      <div className="form-group">
      <label htmlFor = "phoneNumber"> Phone Number </label>
      <input type = "number" className="form-control"
      name = "phoneNumber"
      id = "phoneNumber"
      placeholder = "+91"
      ref = {
        phoneNumberRef
      }/> </div>
      <div className="form-group">
      <label htmlFor = "role"> Your Role </label>
      <input type = "text" className="form-control"
      name = "role"
      id = "role"
      placeholder = "Your role"
      ref = {
        roleRef
      }/> </div>
      <div className="form-group">
      <label htmlFor = "password"> Password </label> <input type = "password" className="form-control" name = "password" id = "password" placeholder = "password" ref = {passwordRef}/></div>
      <div className="form-group">
      <label htmlFor = "geometry">geometry</label>
      <input type = "text" className="form-control"
      name = "geometry"
      id = "geometry"
      placeholder = "location"
      ref = {
        geometryRef
      }/> </div>
      <div className="form-group">
      <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="customCheck1" />
      <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
      </div>
     <button className="btn btn-primary btn-block" onClick = {
      registerUser
    }> Register</button>
<p className="forgot-password text-right">Forgot <a href="#">password?</a></p>
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="#">Login?</a></p>
    </form>
);
}

export default UserRegisterPage;