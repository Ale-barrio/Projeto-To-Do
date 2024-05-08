// Function que adiciona tarefa
function addTask() {

    // Titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {

        // Clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);


        // Adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // Remover classes desnecesárias 
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // Adiciona tarefa a lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // Adicionar evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        })

        // Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function () {
            completeTask(this);
        })

        // Limpar texto
        document.querySelector("#task-title").value = "";
    }

}


// Função de remover tarefa
function removeTask(task) {

    task.parentNode.remove(true);

}

// Função  de completar tarefa
function completeTask(task) {

    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");

}


// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (event) {

    event.preventDefault();

    addTask();
})