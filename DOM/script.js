const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Get tasks from localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update stored tasks based on current list
function updateStoredTasks() {
    const updatedTasks = Array.from(taskList.children).map(li =>
        li.firstChild.textContent.trim()
    );
    saveTasks(updatedTasks);
}

// Render a single task
function renderTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateStoredTasks();
    });

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔️";
    doneBtn.style.marginLeft = "5px";
    doneBtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    });

    li.addEventListener("dblclick", () => {
        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = taskText;
        li.textContent = "";
        li.appendChild(inputEdit);
        inputEdit.focus();

        const saveEdit = () => {
            const newValue = inputEdit.value.trim();
            if (newValue !== "") {
                li.textContent = newValue;
                li.appendChild(doneBtn);
                li.appendChild(deleteBtn);
                updateStoredTasks();
            } else {
                li.remove();
                updateStoredTasks();
            }
        };

        inputEdit.addEventListener("blur", saveEdit);
        inputEdit.addEventListener("keydown", (e) => {
            if (e.key === "Enter") saveEdit();
        });
    });

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    renderTask(taskText);
    const tasks = getTasks();
    tasks.push(taskText);
    saveTasks(tasks);

    input.value = "";
});

// Load saved tasks on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTasks = getTasks();
    savedTasks.forEach(task => renderTask(task));
});
