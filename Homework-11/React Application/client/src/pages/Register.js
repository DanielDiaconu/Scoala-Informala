import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const initObject = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const [user, setUser] = useState(initObject);
  const history = useHistory();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8080/register", user);
      sessionStorage.setItem("auth-token", res.data);
      history.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center register-container"
          style={{ marginTop: "250px" }}
        >
          <div className="col-6 d-flex justify-content-center align-items-center flex-column text-center register-info">
            <h1>Welcome!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <Link to="/sign-in" className="signin-btn">
              {" "}
              Sign In
            </Link>
          </div>
          <div className="col-6 register-form">
            <h1>Create Account</h1>
            <form className="d-flex flex-column align-items-center">
              <input
                type="text"
                placeholder="Name"
                value={user.name}
                onChange={onInputChange}
                name="name"
              />
              <input
                type="text"
                placeholder="Email"
                value={user.email}
                onChange={onInputChange}
                name="email"
              />
              <input
                type="text"
                placeholder="Password"
                value={user.password}
                onChange={onInputChange}
                name="password"
              />
              <button
                type="submit"
                disabled={!user.name | !user.email | !user.password}
                className="sign-up"
                onClick={handleSubmit}
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
