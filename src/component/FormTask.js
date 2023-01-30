import * as React from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

export const FormTask = ({ handleCreate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "" },
  });

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <FormControl>
        <InputGroup>
          <Input
            {...register("name", { required: "This is required." })}
            placeholder="Task name..."
          />
          <InputRightElement>
            <IconButton
              type="submit"
              size="xs"
              bg="inherit"
              aria-label="edit"
              icon={<AddIcon />}
            />
          </InputRightElement>
        </InputGroup>
        <p>{errors.name?.message}</p>
      </FormControl>
    </form>
  );
};
