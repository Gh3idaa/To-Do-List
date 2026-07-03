const input = document.getElementById("taskInput");
const button = document.querySelector("button");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";

    deleteBtn.onclick = () => {
        li.remove();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});
