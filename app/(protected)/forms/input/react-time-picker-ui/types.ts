export type TNullish = null | undefined;
export type TSelectedTime = string | TNullish;

// ReactTimePickerUi Props
export interface IReactTimePickerUiProps {
  label?: string;
  value?: TSelectedTime;
  onChange?: (value: TSelectedTime) => void;
  error?: string;
}
interface ICommonTypes {
  setSelectedTime: React.Dispatch<React.SetStateAction<TSelectedTime>>;
}
export interface ReactTimePickerContextType
  extends IReactTimePickerUiProps,
    ICommonTypes {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement>;
  toggle: () => void;
}

export interface ReactTimePickerUiProviderProps
  extends IReactTimePickerUiProps,
    ICommonTypes {
  children: React.ReactNode;
}
