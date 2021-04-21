import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/form.css";

const Login = () => {
  const submit = (event) => {
    event.preventDefault();

    var email = document.getElementById("signupEmail");
    var pass = document.getElementById("signupPassword");
    if (email.value === "") {
      email.style.borderColor = "red";
      document.getElementById("emailerror").style.display = "block";
    } else {
      email.style.border = "none";
      document.getElementById("emailerror").style.display = "none";
    }
    if (pass.value === "") {
      pass.style.borderColor = "red";
      document.getElementById("passerror").style.display = "block";
    } else {
      pass.style.border = "none";
      document.getElementById("passerror").style.display = "none";

      fetch("http://localhost:5000/auth", {
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: pass.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.msg);
          if (data.msg === "Invalid Email or Password!") {
            alert("Invalid Email or password!");
          } else {
            localStorage.setItem("authorization", data.msg);
            window.location = "/admin";
          }
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <div className="container formcontainer">
      <img
        src="/img/amazon_PNG6.png"
        alt="Logo"
        height="31px"
        width="103px;"
        className="logo"
      ></img>
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form name="registration" onSubmit={submit}>
              <div className="form-group">
                <h2>Sign-In</h2>
              </div>

              <div className="form-group">
                <label className="control-label" for="signupEmail">
                  Email
                </label>
                <input
                  id="signupEmail"
                  type="email"
                  maxlength="50"
                  className="form-control"
                />
                <p style={{ color: "red", display: "none" }} id="emailerror">
                  ! Enter Email
                </p>
              </div>
              <div className="form-group">
                <label className="control-label" for="signupPassword">
                  Password
                </label>
                <input
                  id="signupPassword"
                  type="password"
                  maxlength="25"
                  className="form-control"
                  placeholder="at least 6 characters"
                  length="40"
                />
                <p style={{ color: "red", display: "none" }} id="passerror">
                  ! Enter Password
                </p>
              </div>

              <div className="form-group">
                <button
                  id="signupSubmit"
                  type="submit"
                  className="btn btn-info btn-block"
                >
                  Log In
                </button>
              </div>
              <div className="form-group divider">
                <hr className="left" />
                <small>New to site?</small>
                <hr className="right" />
              </div>
              <p className="form-group">
                <Link to="/register" className="btn btn-info btn-block">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
