import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";
import { useLockBodyScroll } from "./hooks/useLockBodyScroll";
import useClickOutside from "./hooks/useClickOutside";


type ReactTimePickerContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
};


const ReactTimePickerUiContext = createContext<
  ReactTimePickerContextType | undefined
>(undefined);

type ReactTimePickerUiProviderProps = {
  children: ReactNode;
};

export function ReactTimePickerUiProvider({
  children,
}: ReactTimePickerUiProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useLockBodyScroll(isOpen);
  useClickOutside({
    ref: dropdownRef,
    callback: () => setIsOpen(false),
  });

  const contextValue: ReactTimePickerContextType = {
    isOpen,
    setIsOpen,
    dropdownRef,
  };

  return (
    <ReactTimePickerUiContext.Provider value={contextValue}>
      <div ref={dropdownRef} className="relative">
        {children}
      </div>
    </ReactTimePickerUiContext.Provider>
  );
}

// Step 4: Use the context with full type safety
export const useReactTimePickerContext = () => {
  const context = useContext(ReactTimePickerUiContext);
  if (!context) {
    throw new Error(
      "useReactTimePickerContext must be used within a ReactTimePickerUiProvider"
    );
  }
  return context;
};
