import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:3001/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      />
      <button className="button" onClick={login}>
        Login
      </button>
      <div>or</div>
      <button
        className="button"
        onClick={() => {
          history.push("/register");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
