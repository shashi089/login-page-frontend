import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:3001/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter your Password"
        onChange={handleChange}
      />
      <button className="button" onClick={register}>
        Register
      </button>
      <div>or</div>
      <button
        className="button"
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Register;
