document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(taskItem);

            taskInput.value = "";

            // Add event listener to mark tasks as completed
            taskItem.addEventListener("click", function () {
                taskItem.classList.toggle("completed");
            });

            // Add event listener to delete tasks
            const deleteButton = taskItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
