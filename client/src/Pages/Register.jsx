import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function Register() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
      });

      const [err,setError] = useState(null) 
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://192.168.29.239:8800/api/auth/register", inputs);
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <section className="d-flex align-items-center justify-content-center  " style={{height: "90vh"}}>
    <div className="col-10 col-md-4 bg-white px-3 py-5 rounded-5">
         {err && <div class="alert alert-secondary" role="alert">
         {err} </div>}

        <h2 className="text-secondary mb-3">Register</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputText" className="form-label">Name</label>
                <input type="text" onChange={handleChange} name="username" className="form-control" id="exampleInputText"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={handleChange} name="email" className="form-control" id="exampleInputEmail1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={handleChange} name="password" className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" onClick={handleSubmit} className="btn btn-secondary">Sign Up</button>
        </form>
        <div className="d-flex justify-content-center">
            <Link className="blog-link mt-3" to="/login" >Already have Account</Link>
            
        </div>
    </div>
</section>
  )
}

export default Register