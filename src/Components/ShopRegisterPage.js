import React from "react";
import axios from "axios";
import makeToast from "../Toaster";
//import {GOOGLE_API_KEY} from "./config"

const ShopRegisterPage = (props) => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const phoneNumberRef = React.createRef();
  const passwordRef = React.createRef();
  const OpeningTimeRef = React.createRef();
  const ClosingTimeRef = React.createRef();
  const GeometryRef = React.createRef();
  const AddressRef = React.createRef();
  const ImageRef = React.createRef();
  const PriceRef = React.createRef();
  const RoleRef = React.createRef();

  const registerShop = (props) => {
  const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;
    const OpeningTime = OpeningTimeRef.current.value;
    const ClosingTime = ClosingTimeRef.current.value;
    const geometry = GeometryRef.current.value;
     const address = AddressRef.current.value;
      const image = ImageRef.current.value;
      const price = PriceRef.current.value;
      const role = RoleRef.current.value;
      

    axios.post("http://localhost:8000/shops/registershop", {
        name,
        email,
        phoneNumber,
        password,
        OpeningTime,
        ClosingTime,
        price,
        image,
        geometry,
        role,
        address        
      }).then((response) => {
        makeToast("success", response.data.message);
        props.history.push("/shops/login");
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
  /* this.getLocation = this.getLocation.bind(this);
   this.getCoordinates = this.getCoordinates.bind(this);
  this.reverseGeocodeCoordinate = this.reverseGeocodeCoordinate.bind(this);
   getLocation() {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
     } else {
       alert("Geolocation is not supported by this browser.");
     }
   }
   getCoordinates(position) {
     this.setState({
       latitude: position.coords.lalitude;
       longitude: position.coords.longitude;
     })
     this.reverseGeocodeCoordinate();
   }

   reverseGeocodeCoordinate() {

       fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key={google_API_KEY}").then(response => response.json()).then(data => this.setState({
         userAddress: data.results[0].formatted_address
       })).catch(error => alert(error)
       }
       handleLocationError() {
         function showError(error) {
           switch (error.code) {
             case error.PERMISSION_DENIED:
               alert("User denied the request for Geolocation.")
               break;
             case error.POSITION_UNAVAILABLE:
               alert("Location information is unavailable.")
               break;
             case error.TIMEOUT:
               alert("The request to get user location timed out.")
               break;
             case error.UNKNOWN_ERROR:
               alert("An unknown error occurred.")
               break;
             default;

           }
         } */
  return ( 
      <form>
    <h3>Shop Registraion</h3>
      <div className = "form-group">
      <label htmlFor = "name">Name</label>  
      <input type = "text" className="form-control"
      name = "name"
      id = "name"
      placeholder = "Enter your name"
      ref = {nameRef} /> 
      </div>
      <div className = "form-group">
      <label htmlFor = "email"> Email </label>
      <input type = "email" className="form-control"
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
      <label htmlFor = "password"> Password </label> <input type = "password" className="form-control" name = "password" id = "password" placeholder = "password" ref = {passwordRef}/></div>
      <div className="form-group">
      <label htmlFor = "OpeningTime"> Shop Opening Time </label>
      <input type = "text" className="form-control"
      name = "OpeningTime"
      id = "OpeningTime"
      placeholder = "Time"
      ref = {
        OpeningTimeRef
      }/> </div>
      <div className="form-group">
      <label htmlFor = "ClosingTime" > Shop Closing Time </label>
      <input type = "text" className="form-control"
      name = "ClosingTime"
      id = "ClosingTime"
      placeholder = "Time"
      ref = {
        ClosingTimeRef
      }/>
      </div>
      <div className="form-group">
      <label htmlFor = "Geometry" > Geometry </label>
      <input type = "text" className="form-control"
      name = "Geometry"
      id = "Geometry"
      placeholder = "Location"
      ref = {
       GeometryRef
      }/>
      </div>
       <div className="form-group">
      <label htmlFor = "price" > Price </label>
      <input type = "text" className="form-control"
      name = "price"
      id = "price"
      placeholder = "price"
      ref = {
       PriceRef
      }/>
      </div>
         <div className="form-group">
      <label htmlFor = "role" > Role </label>
      <input type = "text" className="form-control"
      name = "role" 
      id = "role"
      placeholder = "Your role "
      ref = {
       RoleRef
      }/>
      </div>
       <div className="form-group">
      <span>Upload Image</span>
      <input type = "file" className="form-control"
      name = "Image"
      id = "Image"
      ref = {
        ImageRef
      }/>
      </div>
      <div className="form-group">
      <label htmlFor = "Address" > Shop Address </label>
      <input type = "text" className="form-control"
      name = "Address"
      id = "Address"
      placeholder = "Address"
      ref = {
        AddressRef
      }/>
      </div>
      <div className = "form-group">
      <button> Get Current location</button>
      <div className="form-group">
      <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="customCheck1" />
      <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
      </div>
      </div>
     <button className="btn btn-primary btn-block" onClick = {
      registerShop
    }> Register</button></div>
    <p className="forgot-password text-right">
       Forgot <a href="#">password?</a>
     </p>
     <p className="forgot-password text-right">
      Already registered <a href="#">Login?</a></p>
     </form>
);
}

export default ShopRegisterPage;