import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const initObject = {
  taskName: "",
  taskDescription: "",
  status: "",
  dueDate: "",
};

function AddTask({ addNewtask }) {
  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [task, setTask] = useState(initObject);
  const storageToken = sessionStorage.getItem("auth_token");

  const toggleTask = () => {
    if (!storageToken) {
      return toast.error("Please log in to add a new task!");
    }
    setToggleAddTask((prev) => !prev);
  };

  const onNewTaskAdd = (e) => {
    e.preventDefault();
    addNewtask(task);
    setToggleAddTask(false);
  };

  const onInputChange = (e) => {
    e.preventDefault();
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-between">
          <h4>Add a new task</h4>
          <button
            className="addtask-btn"
            onClick={toggleTask}
            title={storageToken ? "add task" : "please login to add a task"}
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
        {toggleAddTask && (
          <form className="d-flex flex-column justify-content-center task-form">
            <input
              placeholder="Task Name"
              name="taskName"
              value={task.taskName}
              onChange={onInputChange}
            />
            <textarea
              placeholder="Task Description"
              onChange={onInputChange}
              name="taskDescription"
              value={task.taskDescription}
            ></textarea>
            <select name="status" onChange={onInputChange}>
              <option selected disabled>
                Select Status
              </option>
              <option value="toBeCompleted">To be completed</option>
              <option value="inProgress">In Progress</option>
            </select>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="save-task-btn"
              onClick={onNewTaskAdd}
              disabled={
                !task.taskDescription ||
                !task.taskName ||
                !task.status ||
                !task.dueDate
              }
            >
              Add Task
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default AddTask;
