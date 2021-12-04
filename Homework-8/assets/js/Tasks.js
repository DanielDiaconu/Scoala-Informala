function Tasks() {
  this.name = "Tasks";
  this.parentElement = $(".todo-list");
  this.searchBar = $("#searchBar");
  this.searchString = "";
  this.tasksList = [];
}

Tasks.prototype.init = function () {
  this._fetchTasks();
  this._addEventListeners();
};

Tasks.prototype._fetchTasks = function () {
  $.ajax({
    method: "GET",
    url: "/data/tasks.json",
    success: (data) => this.onTasksLoaded(data.tasks),
    error: this.onError,
  });
};

Tasks.prototype._addEventListeners = function () {
  this.searchBar.on("keyup", (event) => {
    var string = event.target.value;
    this._render(string);
  });
};

Tasks.prototype._render = function (searchString) {
  if (searchString) {
    this.parentElement.empty();
    var filteredTasks = this.tasksList.filter((item) =>
      item.assignedUser.toLowerCase().includes(searchString.toLowerCase())
    );
    filteredTasks.forEach((task) => {
      var taskDiv = task.appendTask();
      this.parentElement.append(taskDiv);
    });
  } else {
    this.parentElement.empty();
    this.tasksList.forEach((task) => {
      var taskDiv = task.appendTask();
      this.parentElement.append(taskDiv);
    });
  }
};

Tasks.prototype.onTasksLoaded = function (tasks) {
  tasks.forEach(
    ({
      taskName,
      taskDescription,
      startDate,
      dueDate,
      taskStatus,
      assignedUser,
    }) => {
      var task = new Task(
        taskName,
        taskDescription,
        startDate,
        dueDate,
        taskStatus,
        assignedUser
      );
      this.tasksList.push(task);
    }
  );
  this._render();
};
