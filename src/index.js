import {todo, todoList, todoListCreate} from './todo';
import {displayController} from './display';
import './style.css';

const addTodoButton = document.getElementById("addTodo");
const confirmAddTodoButton = document.getElementById('confirmButton');
const addTodoDialog = document.getElementById('todoDialog');
const todoTitleInput = document.getElementById('todoTitleInput');
const todoDescriptionInput = document.getElementById('todoDescriptionInput')

const editTodoDialog = document.getElementById('editTodoDialog');
const editTodoDialogTitle = document.getElementById('editTodoTitleInput');


//Start initialization
const currentTodoList = todoListCreate("inbox")

//Test entries
const newNote = todo("A title", "A description again", "date", "high");
currentTodoList.addTodo(newNote);
const newNote2 = todo("A second title", "A description once again again", "date", "high");
currentTodoList.addTodo(newNote2);
const newNote3 = todo("A second title", "A description once again again", "date", "high");
currentTodoList.addTodo(newNote3);
const newNote4 = todo("A second title", "A description once again again", "date", "high");
currentTodoList.addTodo(newNote4);

//update page and make dynamic
//displayController.updateTodoList(currentTodoList.getTodoList());
//addDoneLogic();
renderTodoList();


//dialog connected to + button
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


//confirm in dialog action
confirmAddTodoButton.addEventListener('click', () => {
    let newNote = todo(todoTitleInput.value, todoDescriptionInput.value, "date", "high");
    currentTodoList.addTodo(newNote);
    todoTitleInput.value = '';
    renderTodoList();
});

function renderTodoList() {
    displayController.updateTodoList(currentTodoList.getTodoList());
    addDoneLogic()
    addEditLogic()
}


//funciton to populate todoButtons
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
                let array = currentTodoList.getTodoList()
                editTodoDialogTitle.value = array[i].getTitle()
                editTodoDialog.showModal();
                //let note = todo("title", "A new description", "date", "high");
              //  todoList.addTodo(note);
               // displayController.addTodo(note);
            } else {
              alert("The <dialog> API is not supported by this browser");
            }
            //editTodoDialog
            //currentTodoList.removeTodo(event.target.id);
            //renderTodoList();
        });
    }
}


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



