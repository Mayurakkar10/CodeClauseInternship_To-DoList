const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<span>${taskText}</span><button class="delete-btn">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    }
}
