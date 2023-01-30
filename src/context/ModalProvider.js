import React from "react";

export const ModalContext = React.createContext();


export const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModalProvider must be wrapped in a ModalProvider Component"
    );
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const value = { isOpen, setIsOpen };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
