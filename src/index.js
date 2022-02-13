import {todo, todoList} from './todo';
import {displayController} from './display';
import './style.css';

const note = todo("title", "A description", "date", "high");
todoList.addTodo(note);

console.log(note.getDescription());
console.log(note.getTitle());
console.log(todoList.getTodoList());

displayController.paintPage(todoList);

//test
const content = document.getElementById("content")
const test = document.createElement("div");
test.innerText = "Im a test"
test.classList.add("bg-cyan-200")
content.appendChild(test);
