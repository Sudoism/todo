import {todo, todoList, todoListCreate} from './todo';
import {displayController} from './display';
import './style.css';

const addTodoButton = document.getElementById("addTodo");
const confirmAddTodoButton = document.getElementById('confirmButton');
const addTodoDialog = document.getElementById('todoDialog');
const todoTitleInput = document.getElementById('todoTitleInput');
const todoDescriptionInput = document.getElementById('todoDescriptionInput')


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

//need to dynamically populate the button logics? 

const inboxTodoList = todoListCreate("inbox")

const newNote = todo("A title", "A description again", "date", "high");
inboxTodoList.addTodo(newNote);

const newNote2 = todo("A second title", "A description once again again", "date", "high");
inboxTodoList.addTodo(newNote2);

displayController.updateTodoList(inboxTodoList.getTodoList());

confirmAddTodoButton.addEventListener('click', () => {

    displayController.updateTodoList(todoList.getTodoList());
    let newNote = todo(todoTitleInput.value, todoDescriptionInput.value, "date", "high");
    displayController.addTodo(newNote);
});





