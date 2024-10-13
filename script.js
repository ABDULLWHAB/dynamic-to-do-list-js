// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text from the input and trim any whitespace
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if empty
            return; // Exit the function
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text content

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set the button text
        removeButton.className = 'remove-btn'; // Assign a class

        // Add click event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the list item from the task list
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks using the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
