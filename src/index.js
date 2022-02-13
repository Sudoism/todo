import {todo, todoList} from './todo';
import {displayController} from './display';
import './style.css';

const note = todo("title", "A description", "date", "high");
todoList.addTodo(note);

const newNote = todo("title", "A description again", "date", "high");
todoList.addTodo(newNote);

const newNote2 = todo("title", "A description once again again", "date", "high");
todoList.addTodo(newNote2);

console.log(note.getDescription());
console.log(note.getTitle());
console.log(todoList.getTodoList());
console.log(todoList.getTodoList().length);

displayController.paintPage(todoList.getTodoList());

