import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "./component/Header";
import { TodoList } from "./component/TodoList";

const App = () => {
  return (
    <Box display="flex" flexDir="column" alignItems="center" p={4}>
      <Header />
      <Box
        mt="30px"
        bg="white"
        minH="400px"
        maxW="350px"
        borderWidth="1px"
        borderRadius="lg"
      >
        <TodoList />
      </Box>
    </Box>
  );
};

export default App;
