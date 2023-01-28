// Get the task list
var taskList = document.getElementById("task-list");

// Add an event listener to the task list
taskList.addEventListener("click", function(event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === "LI") {
        // Toggle the "completed" class on the list item
        event.target.classList.toggle("completed");
        event.target.remove();
    }
});
// Get the form and the input field
var form = document.querySelector("form");
var newTaskInput = document.getElementById("new-task");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the new task text
    var newTaskText = newTaskInput.value;

    // Create a new list item
    var newTask = document.createElement("li");
    newTask.textContent = newTaskText;

    // Add the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    newTaskInput.value = "";
});
