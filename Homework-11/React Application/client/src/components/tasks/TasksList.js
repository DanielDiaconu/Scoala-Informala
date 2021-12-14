import TaskItem from "./TaskItem";

function TasksList({ tasks, toggleCompleted, deleteTask }) {
  return (
    <div className="container mt-5">
      <h4>Here are your latest tasks</h4>
      <div className="row justify-content-around ">
        {tasks?.map((task, i) => (
          <TaskItem
            key={i}
            task={task}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TasksList;
