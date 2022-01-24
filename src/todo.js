const todo = (title, description, dueDate, priority) => {
    let done = false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => done;
    return {getTitle, getDescription, getDueDate, getPriority, getStatus}
}

const todoList = (name) => {
    list = [];
    const getName = () => name;
    const addTodo = (todo) => {
        list.push(todo);
    }
    return {getName, addTodo};
}


export {todo};