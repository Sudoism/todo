const displayController = (function() {
    const content = document.getElementById("content");
    const list = document.getElementById("list");
    const listLabelElement = document.getElementById("projectLabel");
    //maybe add a refeerence here to an element that changes name according to project? 

    function updateTodoList(todoList) {
        list.innerText ='';
        console.log(todoList);
        console.log(todoList.length);
        for(let i = 0; i < todoList.length; i++) {
            console.log(todoList[i]);
            addTodo(todoList[i],i);
        }
    }

    function addTodo(todo, id) {
        let newTodoContainer = document.createElement("div");
        newTodoContainer.classList.add('bg-cyan-400', 'grid', 'grid-flow-col', 'grid-cols-4');

        let newTodoButton = document.createElement("button");
        newTodoButton.innerText = "Done";
        newTodoButton.id = id;
        newTodoButton.classList.add('bg-cyan-500', 'hover:bg-cyan-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'justify-self-start', 'm-4')
        newTodoContainer.appendChild(newTodoButton);

        //THis shoud be added in index.js instead .. or maybe not? Maybe reference in HTLM instead 
        newTodoContainer.addEventListener("click", (event) => {
           // console.log(event.currentTarget.id);
            console.log(event.target.id);
            console.log(listLabelElement.innerHTML);
           // todoList.removeTodo(event.target.id);
           //console.log(event.target.id);
        });

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
