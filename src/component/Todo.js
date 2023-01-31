import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { ModalEditProfile } from "./modals/ModalEditProfile";

export const Todo = React.memo(({ todo, deleteTodo, updateTodo }) => {
  const { name } = todo;
  const [isEditing, setIsEditing] = React.useState(false);

  const setToggle = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <Flex alignItems="center">
      <ModalEditProfile
        todo={todo}
        updateTodo={updateTodo}
        setToggle={setToggle}
        isEditing={isEditing}
      />      
        <Text>{name}</Text>      
      <Spacer />
      <HStack>
        <IconButton
          onClick={setToggle}
          size="xs"
          fontSize={"12px"}
          colorScheme="blue"
          aria-label="edit"
          icon={<EditIcon />}
        />
        <IconButton
          onClick={deleteTodo}
          size="xs"
          fontSize={"12px"}
          colorScheme="blue"
          aria-label="edit"
          icon={<DeleteIcon />}
        />
      </HStack>
    </Flex>
  );
});
