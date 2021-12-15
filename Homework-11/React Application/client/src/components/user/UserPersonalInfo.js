import React, { useState } from "react";
const initObject = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

function UserPersonalInfo({ onUserUpdate, user }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  const onInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const submitChanges = (e) => {
    e.preventDefault();
    onUserUpdate(updatedUser);
  };

  return (
    <div className="container">
      <div className="personal-info">
        <h2>Update your personal info</h2>
        <form className="d-flex flex-column">
          <input
            placeholder="Name"
            name="name"
            value={updatedUser?.name}
            onChange={onInputChange}
            type="text"
          />
          <input
            placeholder="Email"
            onChange={onInputChange}
            name="email"
            value={updatedUser?.email}
            type="email"
          />
          <input
            placeholder="Phone"
            onChange={onInputChange}
            name="phone"
            value={updatedUser?.phone}
            type="number"
          />
          <input
            placeholder="Address"
            name="address"
            value={updatedUser?.address}
            onChange={onInputChange}
            type="text"
          />
          <button
            className="info-save-btn"
            onClick={submitChanges}
            disabled={
              !updatedUser.phone ||
              !updatedUser.email ||
              !updatedUser.address ||
              !updatedUser.name
            }
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserPersonalInfo;
