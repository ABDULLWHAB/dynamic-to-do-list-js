// Initialize an empty array to hold tasks
let tasks = [];

// Load tasks from Local Storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    
    // Get references to the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Event listener for adding tasks
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Event listener for adding tasks using the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Function to add a task
function addTask(taskText, save = true) {
    taskText = taskText.trim(); // Trim whitespace
    if (taskText === "") {
        alert("Please enter a task."); // Prompt if empty
        return;
    }

    const taskList = document.getElementById('task-list');

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn'; // Add the class 'remove-btn'
    
    // Assign an onclick event to the remove button
    removeButton.onclick = () => {
        taskList.removeChild(li); // Remove the li element
        removeTaskFromStorage(taskText); // Update local storage
    };

    // Append the remove button to the li element, then append the li to taskList
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the task input field
    document.getElementById('task-input').value = '';

    // Save to Local Storage
    if (save) {
        tasks.push(taskText); // Update the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to Local Storage
    }
}

// Function to remove a task from Local Storage
function removeTaskFromStorage(taskText) {
    tasks = tasks.filter(task => task !== taskText); // Remove the task from the array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Local Storage
}

