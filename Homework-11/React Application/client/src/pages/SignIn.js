import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();
  const storageToken = sessionStorage.getItem("auth_token");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8080/login", user);
      sessionStorage.setItem("auth_token", res.data);
      history.push("/");
    } catch (error) {
      toast.error("Password or email is invalid, please try again!");
    }
  };

  if (storageToken) {
    history.push("/");
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />

      <div>
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center register-container"
            style={{ marginTop: "250px" }}
          >
            <div className="col-6 d-flex justify-content-center align-items-center flex-column text-center register-info">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
                If you dont have an account please create one{" "}
                <Link to="/register">here</Link>
              </p>
            </div>
            <div className="col-6 register-form">
              <h1>Sign In</h1>
              <form className="d-flex flex-column align-items-center">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={onInputChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={onInputChange}
                />
                <button
                  type="submit"
                  className="sign-up"
                  onClick={handleSubmit}
                >
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
