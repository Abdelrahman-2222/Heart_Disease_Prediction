import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
export default class SignUp extends Component {
  render() {
    return (


      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h2>Sign Up</h2>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />



            </div>

            <div className="mb-3">
              <Form.Select aria-label="Default select example">
                <option>sign up as...</option>
                <option value="1">User</option>
                <option value="2">Doctor</option>
              </Form.Select>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-danger">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>

    )
  }
}