const displayController = (function() {
    const content = document.getElementById("content");
    const list = document.getElementById("list");

    function updateTodoList(todoList) {
        list.innerText ='';
        for(let i = 0; i < todoList.length; i++) {
            addTodo(todoList[i],i);
        }
    }

    function addTodo(todo, id) {
        let newTodoContainer = document.createElement("div");
        newTodoContainer.classList.add('bg-cyan-400', 'grid', 'grid-flow-col', 'grid-cols-4');

        let newTodoButton = document.createElement("button");
        newTodoButton.innerText = "Done";
        newTodoButton.id = id;
        newTodoButton.classList.add('new-todo-btn','bg-cyan-500', 'hover:bg-cyan-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'justify-self-start', 'm-4')
        newTodoContainer.appendChild(newTodoButton);

        let newTodoTitle = document.createElement("div");
        newTodoTitle.innerText = todo.getTitle();
        newTodoTitle.classList.add('self-center', 'align-start')
        newTodoContainer.appendChild(newTodoTitle);

        let newTodoDueDate = document.createElement("div");
        newTodoDueDate.classList.add('self-center')
        newTodoDueDate.innerText = "7 May"
        newTodoContainer.appendChild(newTodoDueDate);

        let newTodoEditButton = document.createElement("button");
        newTodoEditButton.innerText = "Edit";
        newTodoEditButton.classList.add('bg-cyan-500', 'hover:bg-cyan-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'justify-self-end', 'm-4')
        newTodoContainer.appendChild(newTodoEditButton);

        list.appendChild(newTodoContainer);
    }

    return {addTodo, updateTodoList}
})()

export {displayController}
