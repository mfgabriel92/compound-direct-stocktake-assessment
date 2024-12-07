import { useState, createContext, PropsWithChildren, useContext } from "react";

interface ModalContextData {
  isOpen: boolean;
  toggleOpenClose: () => void;
  data: object;
  setData: (data: object) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  function toggleOpenClose() {
    setIsOpen(!isOpen);
  }

  function handleSetData(data: object) {
    setData(data);
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, toggleOpenClose, setData: handleSetData, data }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
