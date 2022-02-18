import {todo, todoList, todoListArray} from './todo';
import {displayController} from './display';
import './style.css';

const controller = (function () {
    const addTodoButton = document.getElementById("addTodo");
    const confirmAddTodoButton = document.getElementById('confirmButton');
    const addTodoDialog = document.getElementById('todoDialog');
    const todoTitleInput = document.getElementById('todoTitleInput');
    const todoDescriptionInput = document.getElementById('todoDescriptionInput');
    const todoDateInput = document.getElementById('todoDateInput');

    const editTodoDialog = document.getElementById('editTodoDialog');
    const editTodoDialogTitle = document.getElementById('editTodoTitleInput');
    const editTodoDialogDescription = document.getElementById('editTodoDescriptionInput');
    const editTodoDateDialog = document.getElementById('editTodoDateInput');

    const editConfirmDialog = document.getElementById('confirmEditButton');
    const editIndexDialog = document.getElementById('indexOfTodo');

    const newProjectDialog = document.getElementById('newProjectDialog');
    const newProjectDialogInput = document.getElementById('newProjectInput');
    const newProjectButton = document.getElementById('newProjectButton');
    const newProjectConfirmButton = document.getElementById('confirmNewProjectButton');

    const removeProjectButton = document.getElementById('remove-project-button');
    const projectLabel = document.getElementById("projectLabel");

    const inboxButton = document.getElementById("Inbox");

    //Test entries ////////////////////////
    const todoLists = todoListArray();
    const inboxList = todoList("Inbox");
    const newList = todoList("new");
    todoLists.addTodoList(inboxList);
    todoLists.addTodoList(newList);

    let currentTodoList = todoLists.getTodoLists()[1];

    const newNote3 = todo("Local storage", "A description once again again", "date", "high");
    currentTodoList.addTodo(newNote3);
    const newNote2 = todo("Priority added", "A description once again again", "date", "high");
    currentTodoList.addTodo(newNote2);
    const newNote4 = todo("Final tweak", "A description once again again", "date", "high");
    currentTodoList.addTodo(newNote4);
    addProjectLogic("new");

    /// --------------

    //New Todo button logic
    addTodoButton.addEventListener('click', function onOpen() {
        if (typeof addTodoDialog.showModal === "function") {
            addTodoDialog.showModal();
            //let note = todo("title", "A new description", "date", "high");
          //  todoList.addTodo(note);
           // displayController.addTodo(note);
        } else {
          alert("The <dialog> API is not supported by this browser");
        }
    });

    //confirm new todo dialog action
    confirmAddTodoButton.addEventListener('click', () => {
        let newNote = todo(todoTitleInput.value, todoDescriptionInput.value, todoDateInput.value, "high");
        currentTodoList.addTodo(newNote);
        todoTitleInput.value = '';
        renderTodoList();
    });

    function renderTodoList() {
        displayController.updateTodoList(currentTodoList.getTodoList());
        displayController.updateProjectLabel(currentTodoList.getName());
        addDoneLogic();
        addEditLogic();
    }

    function addDoneLogic() {
        let elem = document.getElementsByClassName("done-button");
    
        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener('click', (event) => {
                currentTodoList.removeTodo(event.target.id);
                renderTodoList();
            });
        }
    }

    function addEditLogic() {
        let elem = document.getElementsByClassName("edit-button");
    
        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener('click', (event) => {
                if (typeof editTodoDialog.showModal === "function") {
                    editTodoDialogTitle.value = currentTodoList.getTodoList()[i].getTitle();
                    editTodoDialogDescription.value = currentTodoList.getTodoList()[i].getDescription();
                    editTodoDateDialog.value = currentTodoList.getTodoList()[i].getDueDate();
                    editIndexDialog.value = i;
                    editTodoDialog.showModal();
                } else {
                  alert("The <dialog> API is not supported by this browser");
                }
                //editTodoDialog
                //currentTodoList.removeTodo(event.target.id);
                //renderTodoList();
            });
        }
    }

    //confirm edit todo dialog action
    editConfirmDialog.addEventListener('click', () => {
       currentTodoList.getTodoList()[editIndexDialog.value].setTitle(editTodoDialogTitle.value); //using index of current todo in list edited, and sets the value entered in dialog (title)
       currentTodoList.getTodoList()[editIndexDialog.value].setDescription(editTodoDialogDescription.value);
       currentTodoList.getTodoList()[editIndexDialog.value].setDueDate(editTodoDateDialog.value);
       renderTodoList();
    });

    newProjectButton.addEventListener('click', function onOpen() {
        if (typeof newProjectDialog.showModal === "function") {
            newProjectDialog.showModal();
        } else {
          alert("The <dialog> API is not supported by this browser");
        }
    });

    newProjectConfirmButton.addEventListener('click', () => {
        displayController.addProject(newProjectDialogInput.value);
        addProjectLogic(newProjectDialogInput.value);

        let newTodoList = todoList(newProjectDialogInput.value);
        todoLists.addTodoList(newTodoList);

        newProjectDialogInput.value = '';
    });

    inboxButton.addEventListener('click', () => {
        currentTodoList = todoLists.getTodoListByName("Inbox");
        renderTodoList();
    });

    removeProjectButton.addEventListener('click', ()=> {
        //dont remove inbox project
        if(projectLabel.innerHTML === "Inbox"){
            return;
        } else {
            displayController.removeProject(currentTodoList.getName());
            todoLists.removeTodoList(currentTodoList.getName())
            displayController.updateProjectLabel("Inbox");
            currentTodoList = todoLists.getTodoListByName("Inbox");
            renderTodoList();
        }
    });

    function addProjectLogic(project) {
        let elem = document.getElementById(project);
        elem.addEventListener('click', (event) => {
            currentTodoList = todoLists.getTodoListByName(event.target.id);
            renderTodoList();
        });
    }

    return {renderTodoList}
})();


//needs to be fixed! 



//currentTodoList = todoLists.getTodoLists()[0];



//initiate page
controller.renderTodoList();











