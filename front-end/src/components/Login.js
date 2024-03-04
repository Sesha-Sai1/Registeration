import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://registeration-r60e.onrender.com/getAllRegisters")
      .then((result) => {
        setData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err, "Error while getting the Registers");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = data.find((register) => register.email === email);
    if (foundUser) {
      alert("Your login is successful");
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid email or password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-info">
        <div className="bg-white rounded w-25 p-3">
          <h2 className="text-center">Login Page</h2>
          <form onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="btn btn-success w-100 rounded my-2"
            >
              Login
            </button>
            <p className="text-center mt-3"> Don't Have an account</p>
            <button className="btn btn-default border w-100 bg-light rounded">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
