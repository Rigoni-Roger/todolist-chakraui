import * as React from "react";
import { Box, Divider, List, ListItem } from "@chakra-ui/react";
import { ModalCreateTask } from "./ModalCreateTask";
import { Todo } from "./Todo";
import { ModalProvider } from "../context/ModalProvider";
import { useTodoList } from "../hooks/useTodoList";

export const TodoList = React.memo(() => {
 const {createTodo, deleteTodo, updateTodo, todos} = useTodoList()

  return (
    <Box minW="300px">
      <ModalProvider>
        <ModalCreateTask createTodo={createTodo} />
      </ModalProvider>
      <Divider />
      <List mt={3} spacing={4}>
        {todos.length &&
          todos.map((todo, index) => (
            <ListItem key={index} p={4}>
              <Todo
                updateTodo={(data) => updateTodo({...data, id: todo.id})}
                deleteTodo={() => deleteTodo(todo.id)}
                todo={todo}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  );
});
