import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import * as React from "react";
import { FormModelProfile } from "../FormModelProfile";

export const ModalEditProfile = ({ todo, updateTodo, setToggle, isEditing }) => {
//
  const onSubmit = (data) => {
    updateTodo(data);
    setToggle();
  };

  return (
    <>
    <Modal isOpen={isEditing} onClose={setToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="center">
          Editing profile
        </ModalHeader>
        <ModalBody pb={6}>
            <FormModelProfile type="edit" setToggle={setToggle} todo={todo} onSubmit={onSubmit}/>            
        </ModalBody>
      </ModalContent>
    </Modal>
</>
  );
};
