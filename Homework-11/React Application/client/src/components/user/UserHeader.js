import React from "react";

function UserHeader({ user }) {
  console.log(user);
  return (
    <div>
      <div className="d-flex user-header">
        <img src={`http://localhost:8080/images/${user?.avatar}`} alt="logo" />
        <div className="d-flex flex-column">
          <strong>{user?.name}</strong>
          <span className="text-muted">
            {" "}
            <i class="far fa-envelope text-muted me-2"></i> {user?.email}
          </span>
          <span>
            {" "}
            <i class="fas fa-phone text-muted me-2"></i>
            {user?.phone}
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UserHeader;
