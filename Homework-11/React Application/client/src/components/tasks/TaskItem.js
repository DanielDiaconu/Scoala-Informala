import React from "react";
import moment from "moment";

function TaskItem({ task, toggleCompleted, deleteTask }) {
  const parseTime = () => {
    return moment(task?.createdAt).fromNow();
  };

  return (
    <div
      className={`col-5 d-flex justify-content-between task-item ${task.status}`}
    >
      <div className="d-flex flex-column col-10">
        <span className="text-muted created-at">created {parseTime()}</span>
        <strong>{task?.taskName}</strong>
        <p>{task?.taskDescription}</p>
        <span className="due-date text-muted">due-date {task.dueDate}</span>
      </div>
      <div className="d-flex flex-column col-2 text-center">
        <i
          class="fas fa-trash mb-2 cursor-pointer"
          onClick={() => deleteTask(task._id)}
        ></i>
        <i
          class="fas fa-check mt-2 cursor-pointer"
          onClick={() => toggleCompleted(task._id)}
        ></i>
      </div>
    </div>
  );
}

export default TaskItem;
