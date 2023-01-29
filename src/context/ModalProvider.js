import React from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {

const [isOpen, setIsOpen] = React.useState(false)

const value = {isOpen, setIsOpen}

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
