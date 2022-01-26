import {todo, todoList} from './todo';
import {displayController} from './display';

const note = todo("title", "A description", "date", "high");
todoList.addTodo(note);

console.log(note.getDescription());
console.log(note.getTitle());
console.log(todoList.getTodoList());

displayController.paintPage(todoList);