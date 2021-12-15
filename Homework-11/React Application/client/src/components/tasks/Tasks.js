import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});
  const token = sessionStorage.getItem("auth_token");

  const getTasks = async () => {
    let id = JSON.parse(atob(token.split(".")[1]))._id;
    let res = await axios.get(`http://localhost:8080/tasks/${id}`);
    setTasks([...tasks, ...res.data]);
  };

  const addnewTask = async (task) => {
    let id = JSON.parse(atob(token.split(".")[1]))._id;
    let res = await axios.post("http://localhost:8080/tasks", {
      ...task,
      user: id,
    });

    setTasks([...tasks, res.data]);
  };

  const toggleCompleted = async (id) => {
    let res = await axios.put(`http://localhost:8080/tasks/${id}`);
    const updatedTasks = tasks.map((task) => {
      if (task._id === res.data._id) {
        return { ...task, status: "completed" };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getTasks();
    }
  }, []);

  return (
    <div className="container mt-50 py-5">
      <div className="">
        <h1>Manage your daily tasks with us!</h1>
        <AddTask addNewtask={addnewTask} />
        {tasks.length > 0 ? (
          <TasksList
            tasks={tasks}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        ) : (
          <h3 className="text-muted mt-5">
            To view your tasks please <Link to="/sign-in">sign in</Link>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Tasks;
