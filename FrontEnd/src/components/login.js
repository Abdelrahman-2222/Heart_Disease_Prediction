import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (


      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h2>Sign In</h2>
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
                <option>Log in  as...</option>
                <option value="1">User</option>
                <option value="2">Doctor</option>
              </Form.Select>
            </div>


            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            {/* <div className="d-grid">
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </div> */}
            <a href='/dashboard'>
              <Button variant="danger">Submit</Button>
            </a>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>

    )
  }
}