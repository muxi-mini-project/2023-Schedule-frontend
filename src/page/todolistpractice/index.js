const TodosContainer = document.getElementById("items");
const TodoTemplate = document.getElementById("itemTemplate");
const AddButton = document.getElementById("add");

let todos = getTodos();

function getTodos(){
    const value = localStorage.getItem("todo") || "[]";
    return JSON.parse(value);
}

function setTodos(todos){
    const todosJson = JSON.stringify(todos);
    localStorage.setItem("todo", todosJson);
}

if(todos.length == 0){
    for(let i = 0; i < 5; i++){
        todos.unshift({
            description: "",
            completed: false
        });
        setTodos(todos);
        refreshList();
    }
}

function updateTodo(todo, key, value){
    todo[key] = value;
    setTodos(todos);
    refreshList();
}

function refreshList(){
    todos.sort((a, b) => {
        if(a.completed){
            return 1;
        }
        if(b.completed){
            return -1
        }
        return a.description < b.description ? -1 : 1;
    });

    TodosContainer.innerHTML = "";
    for(const todo of todos){
        const itemElement = TodoTemplate.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completeInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = todo.description;
        completeInput.checked = todo.completed;

        descriptionInput.addEventListener("change", () => {
            updateTodo(todo, "description", descriptionInput.value);
        });
        completeInput.addEventListener("change", () => {
            updateTodo(todo, "completed", completeInput.checked);
        });

        TodosContainer.append(itemElement);
    }
}

refreshList();