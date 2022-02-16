const todo = (title, description, dueDate, priority, context) => {
    let done = false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const setTitle = (newTitle) =>{
        title = newTitle;
    };

    const setDescription = (newDescription) =>{
        description = newDescription;
    };

    const setDueDate = (newDueDate) =>{
        dueDate = newDueDate;
    };

    const setPriority = (newPriority) =>{
        priority = newPriority;
    };

    return {getTitle, getDescription, getDueDate, getPriority, 
            setTitle, setDescription, setDueDate, setPriority}
}

const todoListCreate = (todoListName) => {
    let list = [];
    let listName = todoListName;

    const getName = () => listName;

    const addTodo = (todo) => {
        list.push(todo);
    }

    const removeTodo = (index) => {
        list.splice(index,1);
    }

    const getTodoList = () => list;

    return {getName, getTodoList, addTodo, removeTodo}
}

export {todo, todoListCreate};