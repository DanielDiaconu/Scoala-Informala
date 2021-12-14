import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navigation() {
  const history = useHistory();
  const token = sessionStorage.getItem("auth_token");

  const onSignOut = () => {
    sessionStorage.removeItem("auth_token");
    history.push("/sign-in");
  };
  return (
    <div className="nav-menu">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
          <img className="nav-logo col-3" src="images/tasks.png" alt="logo" />
          <ul className="d-flex align-items-center col-3">
            <li>
              <Link to="/">Tasks</Link>
            </li>
            <li>
              <Link>Account</Link>
            </li>
            {!token && (
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
            )}
            {token && (
              <li>
                <Link onClick={onSignOut}>Sign Out</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
