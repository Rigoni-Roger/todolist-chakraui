import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

export const Todo = ({ task, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState(task.name);
  const [toggle, setToggle] = React.useState(false)

  const handleToggle = () => {
  setToggle(!toggle)
}

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const editSubmit = (e) => {
    e.preventDefault();
    handleEdit(task.id, value);
    // setValue(task.name)
    setIsEditing(false);
  };

  return (
    <Flex alignItems="center">
      {isEditing ? (
        <form
          onSubmit={editSubmit}
        >
          <Input onChange={onChange} value={value} />
        </form>
      ) : (
        <>
          <Checkbox isChecked={toggle} onChange={handleToggle} colorScheme="blue">
            <Text as={toggle ? "del" : null}>{task.name}</Text>
          </Checkbox>
          <Spacer />
          <HStack>
            <IconButton
              onClick={() => setIsEditing(true)}
              size="xs"
              fontSize={"12px"}
              colorScheme="blue"
              aria-label="edit"
              icon={<EditIcon />}
            />
            <IconButton
              onClick={() => handleDelete(task.id)}
              size="xs"
              fontSize={"12px"}
              colorScheme="blue"
              aria-label="edit"
              icon={<DeleteIcon />}
            />
          </HStack>
        </>
      )}
    </Flex>
  );
};
