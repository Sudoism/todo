const displayController = (function() {
    const content = document.getElementById("content")

    function paintPage() {
        const addNewTodo = document.createElement("button");
        addNewTodo.innerText = "+"
        content.appendChild(addNewTodo);

        const todoList = document.createElement("div");
        todoList.setAttribute("id", "todoList");
        content.appendChild(todoList);
    }

    return {paintPage}
})()

export {displayController}
