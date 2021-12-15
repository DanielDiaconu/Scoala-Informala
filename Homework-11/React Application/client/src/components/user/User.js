import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import UserCompletedTasks from "./UserCompletedTasks";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import UserPersonalInfo from "./UserPersonalInfo";
import UserProgressTasks from "./UserProgressTasks";
import UserToBeCompletedTasks from "./UserToBeCompletedTasks";

function User() {
  const [user, setUser] = useState({});
  let { path } = useRouteMatch();
  const history = useHistory();
  const token = sessionStorage.getItem("auth_token");

  const getUser = async () => {
    let id = JSON.parse(atob(token.split(".")[1]))._id;
    let res = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(res.data);
  };

  const onUserUpdate = async (updatedUser) => {
    await axios.put(`http://localhost:8080/users/${user?._id}`, updatedUser);
    setUser({ ...user, ...updatedUser });
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, []);

  if (!token) {
    history.push("/");
  }

  return (
    <div className="container user-profile">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-6 col-md-4 user-aside">
          <UserHeader user={user} />
          <UserNav />
        </div>
        <div className="col-8 p-5">
          <Switch>
            <Route exact path={path}>
              <Redirect to={`${path}/personal-info`} />
            </Route>
            <Route path={`${path}/personal-info`}>
              <UserPersonalInfo user={user} onUserUpdate={onUserUpdate} />
            </Route>
            <Route path={`${path}/completed-tasks`}>
              <UserCompletedTasks user={user} />
            </Route>
            <Route path={`${path}/progress-tasks`}>
              <UserProgressTasks user={user} />
            </Route>
            <Route path={`${path}/tobecompleted-tasks`}>
              <UserToBeCompletedTasks user={user} />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default User;
