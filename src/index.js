import {todo, todoList} from './todo';
import {displayController} from './display';
import './style.css';

const addTodoButton = document.getElementById("addTodo");
const addTodoDialog = document.getElementById('todoDialog');

addTodoButton.addEventListener('click', function onOpen() {
    if (typeof addTodoDialog.showModal === "function") {
        //addTodoDialog.showModal();
        let note = todo("title", "A new description", "date", "high");
        todoList.addTodo(note);
        displayController.addTodo(note);
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
});

const newNote = todo("title", "A description again", "date", "high");
todoList.addTodo(newNote);

const newNote2 = todo("title", "A description once again again", "date", "high");
todoList.addTodo(newNote2);

console.log(note.getDescription());
console.log(note.getTitle());
console.log(todoList.getTodoList());
console.log(todoList.getTodoList().length);


