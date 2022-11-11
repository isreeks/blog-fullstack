import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <div className="col-10 col-md-4 bg-white px-3 py-5 rounded-5">
        <div class="alert alert-secondary" role="alert">
          
        </div>
        <h2 className="text-secondary mb-3">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Sign in
          </button>
        </form>
        <div className="d-flex justify-content-center">
          <Link className="blog-link mt-3" to="/register">
            Sign Up Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
