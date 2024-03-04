import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Registeration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/register", { name, email, password })
      .then((result) => {
        console.log(result);
        setEmail("");
        setName("");
        setPassword("");
        alert("Successfully Registered");
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data === "Email already exists") {
          alert("Email already exists");
        }
      });
    navigate("/login");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="bg-white rounded w-25 p-3">
        <h2 className="text-center">Registeration Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              autoComplete="off"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div>
            <label>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div>
            <label>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded my-2">
            Register
          </button>
          <p className="text-center mt-3"> Already Have an account</p>
          <button className="btn btn-default border w-100 bg-light rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registeration;
