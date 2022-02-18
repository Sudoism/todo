const displayController = (function() {
    const content = document.getElementById("content");
    const list = document.getElementById("list");
    const nav = document.getElementById("nav");
    const projectLabel = document.getElementById("projectLabel");

    function updateTodoList(todoList) {
        list.innerText ='';
        for(let i = 0; i < todoList.length; i++) {
            addTodo(todoList[i],i);
        }
    }

    function addProject(project) {
        let newProjectButton = document.createElement("button");
        newProjectButton.classList.add('overflow-hidden', 'bg-cyan-500', 'hover:bg-cyan-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'm-2', 'w-32');
        newProjectButton.id=project;
        newProjectButton.innerHTML=project;
        nav.appendChild(newProjectButton);
    }

    function removeProject(project) {
        let projectButton = document.getElementById(project);
        nav.removeChild(projectButton);
    }

    function addTodo(todo, id) {
        let newTodoContainer = document.createElement("div");
        newTodoContainer.classList.add('bg-cyan-400', 'grid', 'grid-flow-col', 'grid-cols-4');

        let newTodoButton = document.createElement("button");
        newTodoButton.innerText = "Done";
        newTodoButton.id = id;
        newTodoButton.classList.add('done-button','bg-cyan-500', 'hover:bg-cyan-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'justify-self-start', 'm-4')
        newTodoContainer.appendChild(newTodoButton);

        let newTodoTitle = document.createElement("div");
        newTodoTitle.innerText = todo.getTitle();
        newTodoTitle.classList.add('self-center', 'align-start')
        newTodoContainer.appendChild(newTodoTitle);

        let newTodoDueDate = document.createElement("div");
        newTodoDueDate.classList.add('self-center')
        newTodoDueDate.innerText = todo.getDueDate();
        newTodoContainer.appendChild(newTodoDueDate);

        let newTodoEditButton = document.createElement("button");
        newTodoEditButton.innerText = "Edit";
        newTodoEditButton.classList.add('edit-button', 'bg-cyan-500', 'hover:bg-cyan-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-full', 'justify-self-end', 'm-4')
        newTodoContainer.appendChild(newTodoEditButton);

        list.appendChild(newTodoContainer);
    }

    function updateProjectLabel(project) {
        projectLabel.innerHTML = project;
    }

    return {addTodo, updateTodoList, addProject, removeProject, updateProjectLabel}
})()

export {displayController}
