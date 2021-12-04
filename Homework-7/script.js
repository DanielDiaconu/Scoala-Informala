$(document).ready(function () {
  var tasksList = $(".todo-list");
  var inputs = $("input");
  var submitButton = $(".todo-button");
  var select = $("select");
  var task = {};

  var createTask = function (task) {
    tasksList.append(`
    <div class="list-item">
      <div class="task-status">
        <span>Status: </span> 
         <span class="py-1  text-uppercase">${task.status}</span>
      </div>
      <div class="task-user-container">
        <span>Assigned to: </span>
        <span class="task-user">${task.assignedUser} </span>
      </div>
      <div class="task-name">${task.taskName}</div>
      <div class= "task-descript">
        <span class="p-1">Description:</span>
        <p class="m-2">${task.taskDescription}</p>
      </div>
      <div class ="task-deadline">
          <div class= "task-deadline-date">
            <span>Start date:</span>
            <span>${task.startDate}</span>
          </div>
          <div class= "task-deadline-date">
            <span>Due date:</span>
            <span>${task.dueDate}</span>
          </div>
      </div>
    </div>
    `);
  };

  $.ajax({
    method: "GET",
    url: "/tasks.json",
    dataType: "json",
  }).done(function (data) {
    $.each(data.tasks, function (task, item) {
      console.log(item);
      createTask(item);
    });
  });

  inputs.on("change", function (e) {
    task[e.target.name] = e.target.value;
  });

  select.on("change", function (e) {
    task[e.target.name] = e.target.value;
  });

  submitButton.on("click", function (e) {
    e.preventDefault();
    if (
      task.status &&
      task.startDate &&
      task.dueDate &&
      task.taskDescription &&
      task.taskName &&
      task.assignedUser
    ) {
      inputs.val("");
      createTask(task);
      $.toast({
        text: "Task added to your list.",
        heading: "Success",
        position: "top-center",
        bgColor: "green",
      });
    } else {
      $.toast({
        text: "Please complete all the fields!",
        heading: "Error!",
        position: "top-center",
        bgColor: "red",
      });
    }
  });
});
