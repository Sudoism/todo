
const displayController = (function() {
    const content = document.getElementById("content");
    const list = document.getElementById("list");

    content.classList.add('grid', 'grid-cols-[1fr_4fr]', 'gap-10');

    function paintPage(todoList) {
        const addNewTodo = document.createElement("button");
        addNewTodo.innerText = "+";
        addNewTodo.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
        content.appendChild(addNewTodo);

        const todoListDisplay = document.createElement("div");
        todoListDisplay.setAttribute("id", "todoList");
        todoListDisplay.classList.add('grid' ,'gap-5');
        content.appendChild(todoListDisplay);

        for(let i= 0; i < todoList.length; i++ ) {
            let todo = todoList[i]
            let description = todo.getDescription();
            let newNode = document.createElement("div");
            newNode.innerText = description;
            todoListDisplay.appendChild(newNode);
        }
    }

    function addTodo(todo) {
        let newTodoContainer = document.createElement("div");
        newTodoContainer.classList.add('bg-cyan-400', 'grid', 'grid-flow-col');

        let newTodoButton = document.createElement("button");
        newTodoButton.innerText = "Done";
        newTodoButton.classList.add('bg-cyan-500', 'hover:bg-cyan-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'justify-self-start', 'm-4')
        newTodoContainer.appendChild(newTodoButton);

        let newTodoDescription = document.createElement("div");
        newTodoDescription.innerText = todo.getDescription();
        newTodoDescription.classList.add('self-center')
        newTodoContainer.appendChild(newTodoDescription);

        let newTodoDueDate = document.createElement("div");
        newTodoDueDate.classList.add('self-center')
        newTodoDueDate.innerText = "7 May"
        newTodoContainer.appendChild(newTodoDueDate);

        list.appendChild(newTodoContainer);
    }

    return {paintPage, addTodo}
})()

export {displayController}
