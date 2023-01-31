import * as React from "react";
import { v4 as uuidv4 } from 'uuid';

const TASK_DB = [{ name: "Roger Rigoni", sex: 'male', age: 29, id: uuidv4() }];

export const useProfileList = () => {
  const [todos, setTodos] = React.useState(TASK_DB);

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const createTodo = (data) => {
    console.log(data)
    const newTask = { ...data, id: uuidv4() };
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
