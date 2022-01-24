import {todo} from './todo';

const note = todo("title", "A description", "date", "high");

console.log(note.getDescription());
console.log(note.getTitle());