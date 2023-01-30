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
import { useForm } from "react-hook-form";

export const Todo = React.memo(({ todo, deleteTodo, updateTodo }) => {

  const {done, name} = todo

  const { register, handleSubmit } = useForm({
    defaultValues: { name: name },
  });


  const [isEditing, setIsEditing] = React.useState(false);

  const handleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleUpdateDone = () => {
    updateTodo({ done: !done });
  };

  const onSubmit = (data) => {
    updateTodo(data);
    handleEdit();
  };

  return (
    <Flex alignItems="center">
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("name")} />
        </form>
      ) : (
        <>
          <Checkbox
            isChecked={done}
            onChange={handleUpdateDone}
            colorScheme="blue"
          >
            <Text as={done ? "del" : null}>{name}</Text>
          </Checkbox>
          <Spacer />
          <HStack>
            <IconButton
              onClick={handleEdit}
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
        </>
      )}
    </Flex>
  );
});
