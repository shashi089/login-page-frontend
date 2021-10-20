import React from "react";

import "./Homepage.css";

const Homepage = ({ setLoginUser }) => {
  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <button
        className="button"
        onClick={() => {
          setLoginUser({});
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Homepage;
