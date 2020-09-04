import React from "react";
import makeToast from "../Toaster";
import axios from "axios";
import {withRouter} from "react-router-dom";


const LoginPage = (props) => {
	const phoneNumberRef = React.createRef();
	const passwordRef = React.createRef();

	const loginUser = () => {
		const phoneNumber = phoneNumberRef.current.value;
		const password = passwordRef.current.value;

		axios.post("http://localhost:8000/user/logincustomer", {
			phoneNumber,
			password
		}).then((response) => {
			makeToast("success", response.data.message);
			localStorage.setItem("CC_TOKEN", response.data.token);
			props.history.push("/user/allshops");
		}).catch((err) => {
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
  		  <h3>Login Page</h3>
      <div className = "form-group">
		<label htmlFor="phoneNumber">Phone Number</label>
		<input type="phoneNumber" className="form-control" name="phoneNumber" id="phoneNumber" placeholder="Enter registered Mobile No." ref={phoneNumberRef} />
		</div>
		<div className = "form-group">
		<label htmlFor="password">Password</label>
		<input type="password" className="form-control" name="password" id="password" placeholder="Your Password" ref={passwordRef} />
		</div>
		<button className="btn btn-primary btn-block" onClick={loginUser}>Login</button>
	<p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
      </p>
	</form>

		);
};

export default withRouter(LoginPage);