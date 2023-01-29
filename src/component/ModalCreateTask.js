import { AddIcon } from "@chakra-ui/icons";
import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { ModalContext } from "../context/ModalProvider";

export const ModalCreateTask = ({ task, setTask }) => {
  const [value, setValue] = React.useState("");
  const { isOpen, setIsOpen } = React.useContext(ModalContext);

  const onClose = () => {
    setIsOpen(false);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newTask = { name: value, done: false, id: (task.length + 1)};
    setTask([...task, newTask]);
    setValue("");
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="center">
          Create your task
        </ModalHeader>
        <ModalBody pb={6}>
          <form onSubmit={handleAdd}>
            <FormControl>
              <InputGroup>
                <Input
                  onChange={onChange}
                  value={value}
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
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
