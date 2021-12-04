function Task(
  taskName,
  taskDescription,
  startDate,
  dueDate,
  taskStatus,
  assignedUser
) {
  {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.taskStatus = taskStatus;
    this.assignedUser = assignedUser;
  }
}

Task.prototype.appendTask = function () {
  {
    return `
    <div class="list-item">
      <div class="task-status">
        <span>Status: </span> 
         <span class="py-1  text-uppercase">${this.taskStatus}</span>
      </div>
      <div class="task-user-container">
        <span>Assigned to: </span>
        <span class="task-user">${this.assignedUser} </span>
      </div>
      <div class="task-name">${this.taskName}</div>
      <div class= "task-descript">
        <span class="p-1">Description:</span>
        <p class="m-2">${this.taskDescription}</p>
      </div>
      <div class ="task-deadline">
          <div class= "task-deadline-date">
            <span>Start date:</span>
            <span>${this.startDate}</span>
          </div>
          <div class= "task-deadline-date">
            <span>Due date:</span>
            <span>${this.dueDate}</span>
          </div>
      </div>
    </div>
    `;
  }
};
