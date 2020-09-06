import React, { Component } from 'react'
import { Shopregister } from './ShopFunction'

class ShopRegister extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      OpeningTime: '',
      ClosingTime: '',
      price: '',
      image: '',
      geometry: '',
      role: '',
      address: '',
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
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      OpeningTime: this.state.OpeningTime,
      ClosingTime: this.state.ClosingTime,
      price: this.state.price,
      image: this.state.image,
      geometry: this.state.geometry,
      role: this.state.role,
      address: this.state.address,

    }

    Shopregister(newUser).then(res => {
      this.props.history.push(`/shops/login`)
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
                  name="first_name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="font-weight-bold text-danger">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
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
                  placeholder="Enter your Mobile number"
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
                <label htmlFor="OpeningTime" className="font-weight-bold text-danger">Opening Time</label>
                <input
                  type="text"
                  className="form-control"
                  name="OpeningTime"
                  placeholder="OpeningTime"
                  value={this.state.OpeningTime}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ClosingTime" className="font-weight-bold text-danger">Closing Time</label>
                <input
                  type="text"
                  className="form-control"
                  name="ClosingTime"
                  placeholder="ClosingTime"
                  value={this.state.ClosingTime}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price" className="font-weight-bold text-danger">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Enter your Price"
                  value={this.state.price}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image" className="font-weight-bold text-danger">Image</label>
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  placeholder="image"
                  value={this.state.image}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="geometry" className="font-weight-bold text-danger">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="geometry"
                  placeholder="geometry"
                  value={this.state.geometry}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role" className="font-weight-bold text-danger">Your Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  placeholder="role"
                  value={this.state.role}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="font-weight-bold text-danger">Shop Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="address"
                  value={this.state.address}
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
      Already registered <a href="/shops/login">Login?</a></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopRegister