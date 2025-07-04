import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";
import { useLockBodyScroll } from "./hooks/useLockBodyScroll";
import useClickOutside from "./hooks/useClickOutside";
import {
  ReactTimePickerContextType,
  ReactTimePickerUiProviderProps,
} from "./types";

const ReactTimePickerUiContext = createContext<
  ReactTimePickerContextType | undefined
>(undefined);

export function ReactTimePickerUiProvider({
  children,
  label,
  value,
  onChange,
  error,
  setSelectedTime,
}: ReactTimePickerUiProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
    toggle,
    label,
    value,
    onChange,
    error,
    setSelectedTime,
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
