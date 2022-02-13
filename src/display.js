const displayController = (function() {
    const content = document.getElementById("content")

    function paintPage(todoList) {
        const addNewTodo = document.createElement("button");
        addNewTodo.innerText = "Hi"
        addNewTodo.classList.add("bg-blue-200")
        content.appendChild(addNewTodo);

        const todoListDisplay = document.createElement("div");
        todoListDisplay.setAttribute("id", "todoList");
        content.appendChild(todoListDisplay);

        for(let i= 0; i < todoList.length; i++ ) {
            let todo = todoList[i]
            let description = todo.getDescription();
            let newNode = document.createElement("div");
            newNode.innerText = description;
            content.appendChild(newNode);
        }
    }

    return {paintPage}
})()

export {displayController}
