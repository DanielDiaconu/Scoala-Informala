import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskItem from "../tasks/TaskItem";

function UserProgressTasks({ user }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    let res = await axios.get(
      `http://localhost:8080/tasks/progress/${user?._id}`
    );
    setTasks([...res.data]);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h3>These are the tasks you are currently workin on</h3>
      <div className="d-flex flex-wrap">
        {tasks.map((task, i) => (
          <TaskItem key={i} task={task} />
        ))}
      </div>
    </div>
  );
}

export default UserProgressTasks;
