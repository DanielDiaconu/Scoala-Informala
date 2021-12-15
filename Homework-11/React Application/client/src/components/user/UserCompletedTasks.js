import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskItem from "../tasks/TaskItem";

function UserCompletedTasks({ user }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    let res = await axios.get(
      `http://localhost:8080/tasks/completed/${user?._id}`
    );
    setTasks([...res.data]);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h3>These are your tasks marked as completed</h3>
      <div className="d-flex flex-wrap">
        {tasks.map((task, i) => (
          <TaskItem key={i} task={task} />
        ))}
      </div>
    </div>
  );
}

export default UserCompletedTasks;
