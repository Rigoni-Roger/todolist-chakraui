import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useModalContext } from "../../context/ModalProvider";
import { FormModelProfile } from "../FormModelProfile";

export const ModalCreateProfile = ({ createTodo }) => {
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
            Create your profile
          </ModalHeader>
          <ModalBody pb={6}>
            <FormModelProfile todo={null} setToggle={onClose} handleCreate={handleCreate} type="create"/>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
