import * as React from "react";
import { Box, Divider, List, ListItem } from "@chakra-ui/react";
import { ModalCreateProfile } from "./modals/ModalCreateProfile";
import { Todo } from "./Todo";
import { ModalProvider } from "../context/ModalProvider";
import { useProfileList } from "../hooks/useProfileList";
import { ButtonCreateProfile } from "./ButtonCreateProfile";

export const TodoList = React.memo(() => {
 const {createTodo, deleteTodo, updateTodo, todos} = useProfileList()



  return (
    <Box minW="300px">
      <ModalProvider>
        <ButtonCreateProfile />
        <ModalCreateProfile createTodo={createTodo} />
      </ModalProvider>
      <Divider />
      <List mt={3} spacing={4}> 
        {todos.length &&
          todos.map((todo, index) => (
            <ListItem key={index} p={4}>              
              <Todo      
                // setToggle={setToggle}
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
