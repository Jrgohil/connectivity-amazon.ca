import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/form.css";

const Registration = () => {
  const submit = (event) => {
    event.preventDefault();
    var passex = "^[a-zA-Z0-9]{6,12}$";
    var name = document.getElementById("signupName");
    var email = document.getElementById("signupEmail");
    var pass = document.getElementById("signupPassword");
    var cpass = document.getElementById("signupPasswordagain");
    if (name.value === "") {
      name.style.borderColor = "red";
      document.getElementById("nameerror").style.display = "block";
    } else {
      name.style.border = "none";
      document.getElementById("nameerror").style.display = "none";
    }
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
    }
    if (cpass.value === "") {
      cpass.style.borderColor = "red";
      document.getElementById("cpasserror").style.display = "block";
    } else {
      cpass.style.border = "none";
      document.getElementById("cpasserror").style.display = "none";
    }
    if (!pass.value.match(passex)) {
      document.getElementById("passerror").style.display = "block";
      document.getElementById("passerror").innerHTML =
        "! Password Must be 6-12 character and no special character";
    } else {
      pass.style.border = "none";
      document.getElementById("passerror").style.display = "none";

      fetch("http://localhost:5000/user/createuser", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: pass.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
        })
        .catch((err) => console.log(`Error ${err}`));
    }
  };

  return (
    <div className="container formcontainer">
      <img
        src="/img/amazon_PNG6.png"
        alt="Logo"
        height="31px"
        width="103px;"
        class="logo"
      ></img>
      <div className="row">
        <div className="panel panel-primary">
          <div className="panel-body">
            <form name="registration" onSubmit={submit}>
              <div className="form-group">
                <h2>Create account</h2>
              </div>
              <div className="form-group">
                <label className="control-label" for="signupName">
                  Your name
                </label>
                <input
                  id="signupName"
                  type="text"
                  maxlength="50"
                  className="form-control"
                  name="name"
                />
                <p style={{ color: "red", display: "none" }} id="nameerror">
                  ! Enter Name
                </p>
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
                <label className="control-label" for="signupPasswordagain">
                  Password again
                </label>
                <input
                  id="signupPasswordagain"
                  type="password"
                  maxlength="25"
                  className="form-control"
                />
                <p style={{ color: "red", display: "none" }} id="cpasserror">
                  ! Enter Confirm Password
                </p>
              </div>
              <div className="form-group">
                <button
                  id="signupSubmit"
                  type="submit"
                  className="btn btn-info btn-block"
                >
                  Create your account
                </button>
              </div>
              <p className="form-group" id="terms">
                By creating an account, you agree to our
                <Link to="/">Terms of Use</Link> and our
                <Link to="/">Privacy Policy</Link>.
              </p>
              <hr />
              <p>
                Already have an account? <Link to="/Login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
