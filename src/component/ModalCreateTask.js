import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useModalContext } from "../context/ModalProvider";
import { FormTask } from "./FormTask";
import { HeaderList } from "./HeaderList";

export const ModalCreateTask = ({ createTodo }) => {
  const { isOpen, setIsOpen } = useModalContext();

  const handleCreate = (data) => {
    createTodo(data);
    setIsOpen(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center">
            Create your task
          </ModalHeader>
          <ModalBody pb={6}>
            <FormTask handleCreate={handleCreate} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <HeaderList />
    </>
  );
};
