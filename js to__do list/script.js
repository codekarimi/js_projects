// Function to add a new task to the list
function addTask() {
    // Get the input field and task list
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    // Get the trimmed text from the input field
    var taskText = taskInput.value.trim();

    // Check if the input field is not empty
    if (taskText !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.textContent = taskText;

        // Create a delete button for the list item
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        // Add an onclick event to delete the task
        deleteBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the delete button to the list item
        li.appendChild(deleteBtn);
        // Append the list item to the task list
        taskList.appendChild(li);
        // Clear the input field after adding the task
        taskInput.value = "";
    } else {
        // Show an alert if the input field is empty
        alert("Please enter a valid task!");
    }
}
