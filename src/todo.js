const todo = (title, description, dueDate, priority, context) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

const todoList = (todoListName) => {
  let list = [];
  let listName = todoListName;

  const getName = () => listName;

  const addTodo = (todo) => {
    list.push(todo);
  };

  const removeTodo = (index) => {
    list.splice(index, 1);
  };

  const getTodoList = () => list;

  return { getName, getTodoList, addTodo, removeTodo };
};

const todoListArray = () => {
  let todoListArray = [];

  if (true === true) {
    console.log("hi");
  }

  const getTodoLists = () => todoListArray;

  const addTodoList = (todoList) => {
    todoListArray.push(todoList);
  };

  const removeTodoList = (todoListName) => {
    todoListArray.splice(findTodoListByKey(todoListName), 1);
  };

  const getTodoListByName = (todoListName) => {
    if (findTodoListByKey(todoListName) === "no match") {
      return null;
    } else {
      return todoListArray[findTodoListByKey(todoListName)];
    }
  };

  const findTodoListByKey = (key) => {
    for (let i = 0; i < todoListArray.length; i++) {
      if (todoListArray[i].getName() === key) {
        return i;
      }
    }
    return "no match";
  };

  return {
    getTodoLists,
    addTodoList,
    removeTodoList,
    getTodoListByName,
  };
};

export { todo, todoList, todoListArray };
