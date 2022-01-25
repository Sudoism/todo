const todo = (title, description, dueDate, priority, context) => {
    let done = false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => done;
    const getContext = () => context;
    return {getTitle, getDescription, getDueDate, getPriority, getStatus, getContext}
}

const todoList = (function(){
    let list = [];
    const addTodo = (todo) => {
        list.push(todo);
    }
    const getTodo = () => list;
    return {getTodo, addTodo};
})()

export {todo, todoList};