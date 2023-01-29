import * as React from "react";
import { Box, Divider, List, ListItem } from "@chakra-ui/react";
import { HeaderList } from "./HeaderList";
import { ModalCreateTask } from "./ModalCreateTask";
import { Todo } from "./Todo";
import { ModalProvider } from "../context/ModalProvider";

const taskDB = [{ name: "Cortar Grama", done: false, id: 99 }];

export const TodoList = () => {
  const [task, setTask] = React.useState(taskDB);

  const handleDelete = Id => {
    const newTask = task.filter((task) => task.id !== Id);
    setTask(newTask);
  };

  const handleEdit = (Id, newTask) => {
    const updatedTasks = task.map(item => item.id === Id ? {...item, name: newTask} : item);
    setTask(updatedTasks);
  };

  return (
    <Box minW="300px">
      <ModalProvider>
        <ModalCreateTask task={task} setTask={setTask} />

{/* Button to create task */}
        <HeaderList />
      </ModalProvider>
      <Divider />
      <List mt={3} spacing={4}>
        {task.length &&
          task.map((it, index) => (
            <ListItem key={index} p={4}>
              <Todo handleEdit={handleEdit} handleDelete={handleDelete} task={it} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};
