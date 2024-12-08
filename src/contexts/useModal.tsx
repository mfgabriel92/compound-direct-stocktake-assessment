import { useState, createContext, PropsWithChildren, useContext } from "react";
import { ModalType } from "../enums";

interface ModalContextData extends PropsWithChildren {
  isOpen: (type: ModalType) => boolean;
  toggleOpenClose: (type: ModalType) => void;
  data: object;
  setData: (data: object) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: PropsWithChildren) {
  const [openModals, setOpenModals] = useState<ModalType[]>([]);
  const [data, setData] = useState({});

  function openModal(type: ModalType) {
    console.log("Opening ", type);
    setOpenModals((prev) => [...prev, type]);
  }

  function closeModal(type: ModalType) {
    setOpenModals((prev) => [...prev.filter((m) => m !== type)]);
  }

  function toggleOpenClose(type: ModalType) {
    if (!isOpen(type)) {
      return openModal(type);
    }

    closeModal(type);
  }

  function isOpen(type: ModalType) {
    return openModals.includes(type);
  }

  function handleSetData(data: object) {
    setData(data);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        toggleOpenClose,
        setData: handleSetData,
        data,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
