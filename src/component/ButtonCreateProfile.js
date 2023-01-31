import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { ModalContext } from "../context/ModalProvider";

export const ButtonCreateProfile = () => {
  const { setIsOpen } = React.useContext(ModalContext);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="white"
      minW={"100%"}
      minH={"40px"}
      height="7vh"
    >
      <Button
        width="60%"
        variant="ghost"
        color="blue.600"
        onClick={() => setIsOpen(true)}
      >
        Create new profile
      </Button>
    </Box>
  );
};
