class Tasks {
  constructor(name) {
    this.name = name;
    this.parentElement = $(".todo-list");
    this.searchBar = $("#searchBar");
    this.tasksList = [];
  }

  init() {
    this._fetchTasks();
    this._addEventListeners();
  }

  async _fetchTasks() {
    try {
      let response = await fetch("/data/tasks.json");
      let data = await response.json();
      this.onTasksLoaded(data.tasks);
    } catch (error) {
      console.log(error);
    }
  }

  _addEventListeners() {
    this.searchBar.on("keyup", (event) => {
      this._render(event.target.value);
    });
  }

  _render(searchString) {
    this.parentElement.empty();
    if (searchString) {
      let filteredTasks = this.tasksList.filter((item) =>
        item.assignedUser.toLowerCase().includes(searchString.toLowerCase())
      );
      filteredTasks.forEach((task) => {
        let taskDiv = task.appendTask();
        this.parentElement.append(taskDiv);
      });
    } else {
      this.parentElement.empty();
      this.tasksList.forEach((task) => {
        let taskDiv = task.appendTask();
        this.parentElement.append(taskDiv);
      });
    }
  }

  onTasksLoaded(tasks) {
    tasks.forEach(
      ({
        taskName,
        taskDescription,
        startDate,
        dueDate,
        taskStatus,
        assignedUser,
      }) => {
        let task = new Task(
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
  }
}
