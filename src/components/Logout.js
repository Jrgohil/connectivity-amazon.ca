import React from "react";
import { Redirect } from "react-router-dom";
const Logout = () => {
  const logoutuser = (e) => {
    e.preventDefault();

    var jwt = localStorage.getItem("authorization");
    if (jwt) {
      localStorage.removeItem("authorization");
    }

    // return <Redirect to="/login" />;
    window.location = "/login";
  };
  return (
    <button className="btn btn-danger" onClick={logoutuser}>
      Logout
    </button>
  );
};

export default Logout;
