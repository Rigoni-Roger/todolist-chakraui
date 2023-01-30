import * as React from "react";

const TASK_DB = [{ name: "Cortar Grama", done: false, id: 99 }];

export const useTodoList = () => {
  const [todos, setTodos] = React.useState(TASK_DB);

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const createTodo = ({ name }) => {
    const newTask = { name, done: false, id: todos.length + 1 };
    setTodos((prevState) => [...prevState, newTask]);
  };

  const updateTodo = (data) => {
    setTodos((prevState) =>
      prevState.map((item) =>
        item.id === data.id ? { ...item, ...data } : item
      )
    );
  };

  return {deleteTodo, createTodo, updateTodo, todos};
};
