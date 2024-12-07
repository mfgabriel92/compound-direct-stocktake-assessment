import { useState, createContext, PropsWithChildren, useContext } from "react";

interface ModalContextData {
  isOpen: boolean;
  toggle: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <ModalContext.Provider value={{ isOpen, toggle }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
