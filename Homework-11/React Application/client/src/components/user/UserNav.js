import React from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

function UserNav() {
  let { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className="d-flex flex-column">
      <Link
        className={
          location.pathname === `${url}/personal-info`
            ? "user-nav active"
            : "user-nav"
        }
        to={`${url}/personal-info`}
      >
        <i class="far fa-user"></i> Personal Info
      </Link>
      <Link
        className={
          location.pathname === `${url}/completed-tasks`
            ? "user-nav active"
            : "user-nav"
        }
        to={`${url}/completed-tasks`}
      >
        Completed Tasks
      </Link>
      <Link
        className={
          location.pathname === `${url}/progress-tasks`
            ? "user-nav active"
            : "user-nav"
        }
        to={`${url}/progress-tasks`}
      >
        Progress Tasks
      </Link>
      <Link
        className={
          location.pathname === `${url}/tobecompleted-tasks`
            ? "user-nav active"
            : "user-nav"
        }
        to={`${url}/tobecompleted-tasks`}
      >
        To Be Completed Tasks
      </Link>
    </div>
  );
}

export default UserNav;
