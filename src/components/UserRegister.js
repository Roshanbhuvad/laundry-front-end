import React, { Component } from 'react'
import { register } from './UserFunction'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
      role: '',
      geometry: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      role: this.state.role,
      geometry: this.state.geometry,
    }

    register(newUser).then(res => {
      this.props.history.push(`/user/logincustomer`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal" className="font-weight-bold text-primary">Register</h1>
              <div className="form-group">
                <label htmlFor="name" className="font-weight-bold text-danger">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="font-weight-bold text-danger">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
                   <div className="form-group">
                <label htmlFor="phoneNumber" className="font-weight-bold text-danger">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Enter your mobile Number"
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold text-danger">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
                <div className="form-group">
                <label htmlFor="role" className="font-weight-bold text-danger">Your Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="Enter your Role"
                  value={this.state.role}
                  onChange={this.onChange}
                />
              </div>
                     <div className="form-group">
                <label htmlFor="geometry" className="font-weight-bold text-danger">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="geometry"
                  placeholder="Enter your Location"
                  value={this.state.geometry}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>

     <p className="forgot-password text-right">
      Already registered <a href="/user/logincustomer">Login?</a></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register